"use server";

import { db } from "@/lib/db";

import { currentUser } from "@/lib/auth";

export const currentStep = async () => {
  const user = await currentUser();

  try {
    const response = await db.vendor.findUnique({
      where: {
        userId: user?.id,
      },
    });
    return { success: response };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
