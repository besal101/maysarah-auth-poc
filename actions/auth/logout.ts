"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  //some server stuff if you want to do before logout
  await signOut();
};
