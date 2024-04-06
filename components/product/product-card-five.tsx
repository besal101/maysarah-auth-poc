import { Product } from "@/types/types";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface ProductCardFiveI {
  product: Product;
}

const ProductCardFive: React.FC<ProductCardFiveI> = ({ product }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full">
        <div className="p-0 space-y-0 w-full">
          <div className="relative shrink-0">
            <div className="flex overflow-hidden max-w-[260px] transition duration-200 ease-in-out transform group-hover:scale-105 relative">
              <Image
                src={product.image}
                alt={product.title}
                width={260}
                height={200}
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 pt-3 ml-2 absolute bottom-4 h-10 w-11/12">
          <Button
            className="text-center font-jakarta font-bold text-sm bg-accent"
            variant={"default"}
          >
            {product.title}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardFive;
