import Container from "@/components/ui/container";
import React from "react";
import Image from "next/image";

const VideoFeed = () => {
  return (
    <div className="flex justify-between items-center w-full px-4 lg:px-20 pt-20 lg:mb-5 xl:mb-6">
      <Image
        src={
          "https://maysarabucket.s3.eu-north-1.amazonaws.com/bridalwear-video.png"
        }
        alt={"Maysarah"}
        height={500}
        width={1200}
        loading="eager"
        className="hidden sm:block md:block lg:block xl:block rounded-t-2xl"
      />
    </div>
  );
};

export default VideoFeed;
