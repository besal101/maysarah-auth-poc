import React from "react";
import Image from "next/image";
import time from "@/assets/time.png";

const PendingSetup = () => {
  return (
    <div className="h-full w-full flex justify-center items-center mx-auto max-w-[600px]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <Image src={time} height={200} width={200} alt="Time" />
        </div>

        <div className="flex items-center justify-center">
          <span className="text-md text-center sm:text-xl md:text-3xl font-bold font-poppins">
            Verification Pending
          </span>
        </div>
        <div>
          <span>
            We have received your documents. It might take upto 2 days to
            complete the verification process. We will send you email once
            confirmed. Thankyou !!!
          </span>
        </div>
      </div>
    </div>
  );
};

export default PendingSetup;
