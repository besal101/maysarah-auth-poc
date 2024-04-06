import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UAE } from "@/components/icons/uae-icon";
import { Dropdown } from "@/components/icons/dropdown-icon";

interface CurrencyI {}

const Currency: React.FC<CurrencyI> = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-row gap-1 justify-between items-center">
        <div className="flex flex-row gap-1">
          <UAE className="w-3 h-3" />
          <span className="text-xs font-medium">AED</span>
        </div>
        <Dropdown className="w-3 h-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        <DropdownMenuLabel className="flex flex-row gap-1">
          <UAE />
          <span className="text-xs font-medium">AED</span>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Currency;
