import { db } from "@/lib/db";

export const getAllCountry = async () => {
  try {
    const country = await db.country.findMany();
    console.log(country);
    return country;
  } catch (error) {
    console.log(error);
    return null;
  }
};
