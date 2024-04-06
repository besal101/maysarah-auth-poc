import React from "react";
import Navbar from "./_components/navbar";

type Props = {
  children: React.ReactNode;
};

const SellerSetuplayout = ({ children }: Props) => {
  return (
    <div className="w-full h-screen  bg-gray-100">
      <Navbar />
      <div className="flex justify-center items-center 2xl:container mt-6">
        {children}
      </div>
    </div>
  );
};

export default SellerSetuplayout;
