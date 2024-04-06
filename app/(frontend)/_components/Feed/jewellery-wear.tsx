import SectionHeader from "@/components/shared/section-header";
import React from "react";
import Image from "next/image";

const Jewellerywear = () => {
  const product = [
    {
      image:
        "https://maysarabucket.s3.eu-north-1.amazonaws.com/jeweller-left.png",
      link: "",
    },
    {
      image:
        "https://maysarabucket.s3.eu-north-1.amazonaws.com/jewellery-center.png",
      link: "",
    },
    {
      image:
        "https://maysarabucket.s3.eu-north-1.amazonaws.com/jewellery-right.png",
      link: "",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between mb-5 md:mb-6">
        <SectionHeader
          sectionMain="Indian Jewellery"
          sectionSecond="wear"
          className="mb-0"
          headingPosition="center"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-wrap">
        {product.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={"Maysarah"}
            height={480}
            width={409}
            loading="eager"
            className="hidden sm:block md:block lg:block xl:block rounded-t-2xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Jewellerywear;
