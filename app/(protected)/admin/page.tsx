"use client";

import React from "react";
import { logout } from "@/actions/auth/logout";
import { Button } from "@/components/ui/button";
import DefaultLayout from "./_components/DefaultLayout";
import Dashboard from "./_components/dashboard";

const AdminPage = () => {
  const onClick = () => {
    logout();
  };

  return (
    // <div>
    //   AdminPage
    //   <span onClick={onClick} className="cursor-pointer">
    //     Signout
    //   </span>
    // </div>
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  );
};

export default AdminPage;
