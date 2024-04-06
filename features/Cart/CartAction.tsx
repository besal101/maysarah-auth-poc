import React from "react";
import { Product } from "@/types/types";
import { Icons } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CartItemActionsProps {
  item: Product;
}

export function CartItemActions({ item }: CartItemActionsProps) {
  //   const { updateCartItemQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (qty: number) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      console.log(quantity);
    }
  };

  const handleRemoveClick = () => {
    console.log(item.id);
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => {
            handleQuantityChange(4 - 1);
          }}
        >
          -
        </Button>
      </div>
      <Input
        className="h-8 w-14 text-xs"
        type="number"
        min="1"
        value={4}
        onChange={(e) => {
          handleQuantityChange(Number(e.target.value));
        }}
      />
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => {
          handleQuantityChange(4 + 1);
        }}
      >
        +
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={handleRemoveClick}
      >
        <Icons.trash className="h-4 w-4" />
      </Button>
    </div>
  );
}
