import React from "react";
import Image from "next/image";

const JoinGuide = () => {
  return (
    <div className="px-4 lg:px-32 pt-20">
      <Image
        src={
          "https://maysarabucket.s3.eu-north-1.amazonaws.com/join-maysarah.png"
        }
        alt={"Maysarah"}
        height={1440}
        width={1440}
        loading="eager"
        className="hidden sm:block md:block lg:block xl:block rounded-t-2xl"
      />
    </div>
  );
};

export default JoinGuide;
