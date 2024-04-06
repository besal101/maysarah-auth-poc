import { z } from "zod";

import { formatNumberWithCommas } from "@/lib/functions";

const fieldValidators = {
  name: z
    .string()
    .min(2, { message: "Must be at least 2 characters" })
    .max(50, { message: "Must be at most 50 characters" }),
  address: z
    .string()
    .min(2, { message: "Must be at least 2 characters" })
    .max(70, { message: "Must be between 2 and 70 characters" }),
  email: z
    .string()
    .email({ message: "Email must be a valid email" })
    .min(5, { message: "Must be between 5 and 30 characters" })
    .max(30, { message: "Must be between 5 and 30 characters" }),
  // Dates
  date: z.date({
    required_error: "Date is required.",
  }),

  // Strings
  string: z
    .string({
      required_error: "This is required",
    })
    .min(1, { message: "This is required" }),
  stringMin1: z.string().min(1, { message: "Must be at least 1 character" }),
  stringToNumber: z.coerce.number(),
  optionalNumber: z.coerce.number().optional(),
  // Charges
  stringToNumberWithMax: z.coerce.number().max(1000000),

  stringOptional: z.string().optional(),
  numWithCommas: z.coerce
    .number()
    .nonnegative({
      message: "Must be a positive number",
    })
    .transform((value) => {
      return formatNumberWithCommas(value);
    }),
};

export const VendorSchema = z.object({
  userId: fieldValidators.stringOptional,
  company_name: fieldValidators.string,
  company_mobile_number: fieldValidators.string,
  company_landline_number: fieldValidators.stringOptional,
  company_country_id: fieldValidators.string,
  company_address1: fieldValidators.string,
  company_address2: fieldValidators.stringOptional,
  company_description: fieldValidators.string,

  contact_person_name: fieldValidators.string,
  designation: fieldValidators.string,
  account_name: fieldValidators.string,
  bank_name: fieldValidators.string,
  account_number: fieldValidators.string,

  company_logo: fieldValidators.string,
  company_cover_image: fieldValidators.stringOptional,
  company_trade_licence: fieldValidators.string,
  vendor_passport: fieldValidators.string,
  vendor_id: fieldValidators.string,
  company_bill: fieldValidators.string,
});

export const VendorFormOneSchema = z.object({
  userId: fieldValidators.stringOptional,
  company_name: fieldValidators.string,
  company_mobile_number: fieldValidators.string,
  company_landline_number: fieldValidators.stringOptional,
  company_country_id: fieldValidators.string,
  company_address1: fieldValidators.string,
  company_address2: fieldValidators.stringOptional,
  company_description: fieldValidators.string,
});

export const VendorFormTwoSchema = z.object({
  contact_person_name: fieldValidators.string,
  designation: fieldValidators.string,
  account_name: fieldValidators.string,
  bank_name: fieldValidators.string,
  account_number: fieldValidators.string,
});

export const VendorFormThreeSchema = z.object({
  company_logo: fieldValidators.string,
  company_cover_image: fieldValidators.stringOptional,
  company_trade_licence: fieldValidators.string,
  vendor_passport: fieldValidators.string,
  vendor_id: fieldValidators.string,
  company_bill: fieldValidators.string,
});
