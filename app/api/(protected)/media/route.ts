import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";

const s3Client = new S3Client({
  region: process.env.BUCKET_REGION as string,
  credentials: {
    accessKeyId: process.env.BUCKET_ACCESS_KEY as string,
    secretAccessKey: process.env.BUCKET_SECRET_KEY as string,
  },
});

async function uploadImageToS3(
  file: Buffer,
  fileName: string,
  filetype?: string | null
): Promise<string> {
  let resizedImageBuffer = file;
  if (filetype !== "document") {
    resizedImageBuffer = await sharp(file)
      .resize(400, 500) // Specify your desired width or height for resizing
      .toBuffer();
  }

  const params = {
    Bucket: process.env.BUCKET_NAME as string,
    Key: `${Date.now()}-maysara-${fileName}`,
    Body: resizedImageBuffer,
    ContentType: "image/jpeg", // Change the content type accordingly
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  return fileName;
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const formData = await request.formData();
    const files = formData.get("files") as Blob | null;
    const filetype = formData.get("doctype") as string | null;

    if (!files) {
      return NextResponse.json(
        { error: "File blob is required." },
        { status: 400 }
      );
    }

    const filesArray = Array.isArray(files) ? files : [files];
    const mimeType = files.type;
    const fileExtension = mimeType.split("/")[1];
    const uploadPromises = filesArray.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = await uploadImageToS3(
        buffer,
        uuid() + "." + fileExtension,
        filetype
      );
      return fileName;
    });

    const uploadedFileNames = await Promise.all(uploadPromises);
    console.log(uploadedFileNames);

    return NextResponse.json({ success: true, uploadedFileNames });
  } catch (error) {
    console.error("Error uploading image:", error);
    NextResponse.json({ message: "Error uploading image" });
  }
}
