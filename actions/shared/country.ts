"use server";

import { db } from "@/lib/db";

export const getAllCountry = async () => {
  const country = await db.country.findMany();

  return { success: country };
};
