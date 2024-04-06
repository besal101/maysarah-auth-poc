"use client";

import * as React from "react";
import { Icons } from "@/components/icons/icons";
import Image from "next/image";
import { Product } from "@/types/types";
import { formatPrice } from "@/lib/utils";
import { CartItemActions } from "./CartAction";

interface CartItemProps {
  item: Product;
}

export function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex flex-row items-center space-x-4">
      <div className="relative h-16 w-16 overflow-hidden rounded">
        <Image
          src={item.image}
          alt={item.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="absolute object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 self-start text-sm">
        <span className="line-clamp-1">{item.title}</span>
        <span className="line-clamp-1 text-muted-foreground">
          {formatPrice(item.price)} x 4 = {formatPrice(item.price * 4)}
        </span>
        <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
          {item.category}
        </span>
      </div>
      <CartItemActions item={item} />
    </div>
  );
}
