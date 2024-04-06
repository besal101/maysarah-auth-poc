import Container from "@/components/ui/container";
import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/shared/section-header";

const StoreInfo = () => {
  return (
    <Container>
      <SectionHeader sectionMain="Visit Our" sectionSecond="Store" />
      <div className="grid grid-cols-1 sm:grid-cols-2 px-4 gap-4">
        <div className="col-span-1">
          <Image
            src={
              "https://maysarabucket.s3.eu-north-1.amazonaws.com/video-placeholder.png"
            }
            alt={"Hello"}
            width={660}
            height={300}
            quality={100}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <div className="flex flex-col gap-2">
              <Image
                src={
                  "https://maysarabucket.s3.eu-north-1.amazonaws.com/video-placeholder.png"
                }
                alt={"Hello"}
                width={300}
                height={250}
                quality={100}
              />
              <div className="flex flex-col gap-2">
                <span className="font-bigc font-semibold text-lg">
                  Maysarah
                </span>
                <span className="font-jakarta font-medium text-base">
                  Main Branch Dubai
                </span>
                <span className="font-jakarta font-normal text-sm text-gray-500">
                  04 Souq Al Kabeer Meena Bazar Dubai
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-2">
              <Image
                src={
                  "https://maysarabucket.s3.eu-north-1.amazonaws.com/video-placeholder.png"
                }
                alt={"Hello"}
                width={300}
                height={250}
                quality={100}
              />
              <div className="flex flex-col gap-2">
                <span className="font-bigc font-semibold text-lg">
                  Maysarah
                </span>
                <span className="font-jakarta font-medium text-base">
                  Main Branch Dubai
                </span>
                <span className="font-jakarta font-normal text-sm text-gray-500">
                  07 Al Fardan Building opp. Mumbai Masti Juice Center, Meena
                  bazar Dubai
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StoreInfo;
