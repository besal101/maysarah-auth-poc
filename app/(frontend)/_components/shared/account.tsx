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
import { User } from "@/components/icons/user-icon";

interface AccountI {}

const Account: React.FC<AccountI> = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-row gap-1 justify-between items-center">
        <User className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>My Orders</DropdownMenuItem>
        <DropdownMenuItem>Sign in</DropdownMenuItem>
        <DropdownMenuItem>Sign up</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Account;
