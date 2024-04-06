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

interface ProductCardOneI {
  product: Product;
}

const ProductCardOne: React.FC<ProductCardOneI> = ({ product }) => {
  return (
    <Card className="border-[1px] border-border shadow-sm overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full">
      <CardHeader className="p-0 space-y-0 w-full">
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
      </CardHeader>
      <CardContent className="font-bigc font-semibold text-lg text-center">
        {product.title}
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-center items-center px-4 py-1">
        <p className="font-jakarta text-gray-400 text-[14px] font-semibold">
          Starting from AED {product.price}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProductCardOne;
