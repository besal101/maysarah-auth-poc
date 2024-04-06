"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { getAllCountry } from "@/actions/shared/country";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { VendorFormOneSchema } from "@/schemas/vendorSchema";
import { CountryType } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { startTransition, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GrFormNextLink } from "react-icons/gr";
import { z } from "zod";
import { useCurrentUser } from "@/hooks/use-current-user";
import { setupone } from "@/actions/seller/setup";
import { FormError } from "@/components/shared/form-error";
import { FormSuccess } from "@/components/shared/form-success";

interface StepOneProps {
  handleSteps: (step: string) => void;
}

const StepOne: React.FC<StepOneProps> = ({ handleSteps }) => {
  const [country, setCountry] = useState<CountryType[]>([]);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const user = useCurrentUser();

  const fetchCountry = useCallback(() => {
    getAllCountry()
      .then((data) => {
        setCountry(data.success);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchCountry();
  }, [fetchCountry]);

  const form = useForm<z.infer<typeof VendorFormOneSchema>>({
    resolver: zodResolver(VendorFormOneSchema),
    defaultValues: {
      company_name: "",
      company_mobile_number: "",
      company_landline_number: "",
      company_country_id: "",
      company_address1: "",
      company_address2: "",
      company_description: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof VendorFormOneSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      setupone(data)
        .then((data) => {
          if (data?.success) {
            handleSteps("steptwo");
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
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">
                      Company Name
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
                name="company_mobile_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">
                      Mobile Number
                      <span className="text-destructive ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} className="h-8" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="company_landline_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">
                      LandLine number{" "}
                      <span className="text-destructive ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} className="h-8" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="company_country_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="company_country_id"
                      className="mr-8 text-xs"
                    >
                      Select Country
                      <span className="text-destructive ml-0.5">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue
                            placeholder="Select Country"
                            className="text-xs"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="py-0 px-0 max-h-[300px]">
                        {country?.map((item: CountryType) => (
                          <SelectItem
                            value={item.id}
                            key={item.id}
                            className="py-0 text-xs"
                          >
                            <FormItem className="flex flex-row h-8 py-1">
                              <Image
                                src={item.flag}
                                alt={item.name}
                                className="w-6 h-6"
                                height={6}
                                width={6}
                              />
                              <span className="ml-2">{item.name}</span>
                            </FormItem>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="company_address1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">
                      Company Address 1
                      <span className="text-destructive ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1">
              <FormField
                control={form.control}
                name="company_address2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">Company Address 2</FormLabel>
                    <FormControl>
                      <Input className="h-8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="company_description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">
                      Company Description{" "}
                      <span className="text-destructive ml-0.5">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea {...field} />
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
            <Button
              className="text-sm flex flex-row gap-1"
              variant={"default"}
              type="submit"
            >
              Next
              <GrFormNextLink size={20} />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default StepOne;
