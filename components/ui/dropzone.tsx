import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";
import { API_ENDPOINTS } from "@/lib/routes";

// Define the props expected by the Dropzone component
interface DropzoneProps {
  onChange: (files: string[]) => void;
  className?: string;
  fileExtension?: string | string[];
  multiple?: boolean;
}

// Create the Dropzone component receiving props
export function Dropzone({
  onChange,
  className,
  fileExtension: propFileExtension,
  multiple = false,
  ...props
}: DropzoneProps) {
  // Initialize state variables using the useState hook
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference to file input element
  const [fileInfo, setFileInfo] = useState<string | null>(null); // Information about the uploaded file
  const [error, setError] = useState<string | null>(null); // Error message state
  const [loading, setLoading] = useState(false); // Loading state

  const defaultFileExtensions = ["jpg", "jpeg", "png", "pdf", "doc", "docx"];
  const additionalFileExtensions =
    typeof propFileExtension === "string"
      ? [propFileExtension]
      : propFileExtension || [];

  const fileExtension = [
    ...defaultFileExtensions,
    ...additionalFileExtensions,
  ].map((ext) => ext.toLowerCase());

  // Function to handle drag over event
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Function to handle drop event
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setLoading(true);
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    handleFiles(files);
  };

  // Function to handle file input change event
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      handleFiles(files);
    }
  };

  // Function to handle processing of uploaded files
  const handleFiles = async (files: FileList) => {
    setLoading(true);
    const uploadedFile = files[0];

    // Check file extension
    const isAllowedExtension = fileExtension.some((ext) =>
      uploadedFile.name.toLowerCase().endsWith(`.${ext.trim()}`)
    );

    if (!isAllowedExtension) {
      setError(`Invalid file type. Expected: ${fileExtension.join(", ")}`);
      return;
    }

    try {
      const fileUrl = await uploadFile(uploadedFile);
      onChange(fileUrl);
      setLoading(false);
      // Display file information
      setFileInfo(`Uploaded file: ${uploadedFile.name}`);
      setError(null); // Reset error state
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Error uploading file. Please try again.");
    }

    const fileSizeInKB = Math.round(uploadedFile.size / 1024); // Convert to KB

    // Display file information
    setFileInfo(`Uploaded file: ${uploadedFile.name} (${fileSizeInKB} KB)`);
    setError(null); // Reset error state
  };

  const uploadFile = async (file: File): Promise<string[]> => {
    const formData = new FormData();
    formData.append("files", file);
    formData.append("doctype", "document");

    try {
      const response = await axios.post(
        `${API_ENDPOINTS.MEDIAUPLOAD}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 10000,
        }
      );

      if (response.status !== 200) {
        throw new Error(`Upload failed with status: ${response.statusText}`);
      }

      return response.data.uploadedFileNames; // Assuming the server returns the file URL
    } catch (error: any) {
      throw new Error(`Error uploading file: ${error.message}`);
    }
  };

  // Function to simulate a click on the file input element
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={`border-2 border-dashed bg-muted hover:cursor-pointer hover:border-muted-foreground/50  h-16 ${className}`}
      {...props}
    >
      <div
        className="flex flex-col items-center justify-center space-y-2 px-2 py-4 text-xs"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex items-center justify-center text-muted-foreground">
          {loading ? (
            <BeatLoader
              color={"#B51E21"}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <>
              {fileInfo ? (
                <div className="flex flex-row gap-2 justify-center items-center">
                  <p className="text-muted-foreground">{fileInfo}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto flex h-8 space-x-1 px-0 pl-1 text-xs"
                    type="button"
                    onClick={() => {
                      setFileInfo(null);
                      setError(null);
                      onChange([]);
                    }}
                  >
                    <MdDelete
                      color="red"
                      size={16}
                      className="cursor-pointer"
                    />
                    <span>Remove</span>
                  </Button>
                </div>
              ) : (
                <>
                  {" "}
                  <span className="font-medium">Drag Files to Upload or</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto flex h-8 space-x-2 px-0 pl-1 text-xs font-semibold"
                    onClick={handleButtonClick}
                  >
                    Click Here
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={fileExtension.map((ext) => `.${ext}`).join(", ")}
                    onChange={handleFileInputChange}
                    className="hidden"
                    multiple={multiple}
                  />
                </>
              )}
            </>
          )}
        </div>
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
}
