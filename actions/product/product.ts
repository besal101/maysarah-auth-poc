"use server";

import { Product } from "@/types/types";

export async function getProducts(sort?: string): Promise<Product[]> {
  try {
    const apiUrl = `https://fakestoreapi.com/products?sort=${sort}`;

    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw error;
  }
}
