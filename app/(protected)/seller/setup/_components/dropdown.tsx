"use client";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { logout } from "@/actions/auth/logout";

type Props = {};

const DropdownContent = (props: Props) => {
  const onClick = () => {
    logout();
  };
  return (
    <DropdownMenuContent className="font-nunito mr-4">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={onClick}>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  );
};

export default DropdownContent;
