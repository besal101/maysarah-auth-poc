"use client";

import { setupthree } from "@/actions/seller/setup";
import { FormError } from "@/components/shared/form-error";
import { FormSuccess } from "@/components/shared/form-success";
import { Button } from "@/components/ui/button";
import { Dropzone } from "@/components/ui/dropzone";
import { Form } from "@/components/ui/form";
import { VendorFormThreeSchema } from "@/schemas/vendorSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

const StepThree = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof VendorFormThreeSchema>>({
    resolver: zodResolver(VendorFormThreeSchema),
    defaultValues: {
      company_bill: "",
      company_cover_image: "",
      company_logo: "",
      company_trade_licence: "",
      vendor_id: "",
      vendor_passport: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof VendorFormThreeSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      setupthree(data)
        .then((data) => {
          if (data?.success) {
            router.push("/seller/setup/pending");
          }
          if (data?.error) {
            setError(data?.error);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  const handleCompanyLogo = (files: string[]) => {
    form.setValue("company_logo", files[0]);
  };

  const handleCompanyCover = (files: string[]) => {
    form.setValue("company_cover_image", files[0]);
  };

  const handleTradeLicence = (files: string[]) => {
    form.setValue("company_trade_licence", files[0]);
  };

  const handlePassport = (files: string[]) => {
    form.setValue("vendor_passport", files[0]);
  };

  const handlegovernmentID = (files: string[]) => {
    form.setValue("vendor_id", files[0]);
  };

  const handleShopBill = (files: string[]) => {
    form.setValue("company_bill", files[0]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="px-4 py-4 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-700">
                  Company logo{" "}
                  <span className="text-destructive ml-0.5">*</span>
                </span>
                <Dropzone onChange={handleCompanyLogo} />
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-700">
                  Company Cover Image{" "}
                  <span className="text-destructive ml-0.5">*</span>
                </span>
                <Dropzone onChange={handleCompanyCover} />
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-700">
                  Trade licence{" "}
                  <span className="text-destructive ml-0.5">*</span>
                </span>
                <Dropzone onChange={handleTradeLicence} />
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-700">
                  Passport <span className="text-destructive ml-0.5">*</span>
                </span>
                <Dropzone onChange={handlePassport} />
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-700">
                  Government ID{" "}
                  <span className="text-destructive ml-0.5">*</span>
                </span>
                <Dropzone onChange={handlegovernmentID} />
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-slate-700">
                  Any shop bill (Electricity / Water / Gas)
                  <span className="text-destructive ml-0.5">*</span>
                </span>
                <Dropzone onChange={handleShopBill} />
              </div>
            </div>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <div className="flex justify-end">
            <div className="flex flex-row gap-2">
              <Button
                className="text-sm flex flex-row gap-1"
                type="submit"
                variant={"default"}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default StepThree;
