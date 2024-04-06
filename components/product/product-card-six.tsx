import { Product } from "@/types/types";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface ProductCardSixI {
  product: Product;
}

const ProductCardSix: React.FC<ProductCardSixI> = ({ product }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full">
        <div className="p-0 space-y-0 w-full">
          <div className="flex overflow-hidden max-w-[220px] transition duration-200 ease-in-out transform group-hover:scale-105 relative rounded-full">
            <Image
              src={product.image}
              alt={product.title}
              width={220}
              height={220}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSix;
