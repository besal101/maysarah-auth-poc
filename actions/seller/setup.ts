"use server";

import { VendorFormOneSchema } from "@/schemas";
import * as z from "zod";
import { db } from "@/lib/db";

import { currentUser } from "@/lib/auth";
import {
  VendorFormThreeSchema,
  VendorFormTwoSchema,
} from "@/schemas/vendorSchema";

export const setupone = async (values: z.infer<typeof VendorFormOneSchema>) => {
  const validatedFields = VendorFormOneSchema.safeParse(values);
  const user = await currentUser();

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const {
    company_address1,
    company_country_id,
    company_description,
    company_mobile_number,
    company_name,
    company_address2,
    company_landline_number,
  } = validatedFields.data;

  try {
    await db.vendor.create({
      data: {
        userId: user?.id!,
        company_address1,
        company_country_id,
        company_description,
        company_mobile_number,
        company_name,
        company_address2,
        company_landline_number,
        step_completed: 1,
      },
    });
    return { success: "Setup One Completed" };
  } catch (error) {
    return { error: "Error creating the vendor" };
  }
};

export const setuptwo = async (values: z.infer<typeof VendorFormTwoSchema>) => {
  const validatedFields = VendorFormTwoSchema.safeParse(values);
  const user = await currentUser();

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const {
    account_name,
    account_number,
    bank_name,
    contact_person_name,
    designation,
  } = validatedFields.data;

  try {
    await db.vendor.update({
      data: {
        step_completed: 2,
        account_name: account_name,
        account_number,
        bank_name,
        contact_person_name,
        designation,
      },
      where: {
        userId: user?.id!,
      },
    });
    return { success: "Setup Two Completed" };
  } catch (error) {
    console.log("[ERRORONVENDORCREATIONSTEPS2]:", error);
    return { error: "Error creating the vendor" };
  }
};

export const setupthree = async (
  values: z.infer<typeof VendorFormThreeSchema>
) => {
  const validatedFields = VendorFormThreeSchema.safeParse(values);
  const user = await currentUser();

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const {
    company_bill,
    company_logo,
    company_trade_licence,
    vendor_id,
    vendor_passport,
    company_cover_image,
  } = validatedFields.data;

  try {
    await db.vendor.update({
      data: {
        step_completed: 3,
        company_bill,
        company_logo,
        company_trade_licence,
        vendor_id,
        vendor_passport,
        company_cover_image,
      },
      where: {
        userId: user?.id!,
      },
    });
    return { success: "Setup Three Completed" };
  } catch (error) {
    console.log("[ERRORONVENDORCREATIONSTEPS2]:", error);
    return { error: "Error creating the vendor" };
  }
};
