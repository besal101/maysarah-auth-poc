"use client";
import { setuptwo } from "@/actions/seller/setup";
import { FormError } from "@/components/shared/form-error";
import { FormSuccess } from "@/components/shared/form-success";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { VendorFormTwoSchema } from "@/schemas/vendorSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { GrFormNextLink } from "react-icons/gr";
import { z } from "zod";

interface StepTwoProps {
  handleSteps: (step: string) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ handleSteps }) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof VendorFormTwoSchema>>({
    resolver: zodResolver(VendorFormTwoSchema),
    defaultValues: {
      account_name: "",
      account_number: "",
      bank_name: "",
      contact_person_name: "",
      designation: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof VendorFormTwoSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      setuptwo(data)
        .then((data) => {
          if (data?.success) {
            handleSteps("stepthree");
          }
          if (data?.error) {
            setError(data?.error);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="px-4 py-4 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="contact_person_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">
                      Contact Person Name{" "}
                      <span className="text-destructive ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-8" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">
                      Designation{" "}
                      <span className="text-destructive ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-8" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="account_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">
                      Account holders name{" "}
                      <span className="text-destructive ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-8" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-1">
              <FormField
                control={form.control}
                name="bank_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">
                      Bank Name{" "}
                      <span className="text-destructive ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-8" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-2">
              <FormField
                control={form.control}
                name="account_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">
                      IBAN Number{" "}
                      <span className="text-destructive ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="h-8" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <div className="flex justify-end">
            <div className="flex flex-row gap-1">
              <Button
                className="text-sm flex flex-row gap-1"
                type="submit"
                variant={"default"}
              >
                Next
                <GrFormNextLink size={20} />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default StepTwo;
