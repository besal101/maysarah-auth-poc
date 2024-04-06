import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Product } from "@/types/types";
import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";

interface ProductCardTwoI {
  product: Product;
}

const ProductCardTwo: React.FC<ProductCardTwoI> = ({ product }) => {
  return (
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
      <div className="flex flex-col gap-1 pt-3">
        <p className="text-center text-xs font-jakarta font-semibold">
          {product.category}
        </p>
        <h3 className="text-center font-jakarta font-bold text-base">
          {product.title}
        </h3>
        <p className="text-center font-semibold text-md font-jakarta">
          <span className="text-sm text-gray-500">AED</span> {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCardTwo;
