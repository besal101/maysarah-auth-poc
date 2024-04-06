"use client";

import * as z from "zod";
import { CardWrapper } from "@/components/auth/card-wrapper";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { register } from "@/actions/auth/register";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from "@/schemas";
import { useState, useTransition } from "react";
import { FormError } from "@/components/shared/form-error";
import { FormSuccess } from "@/components/shared/form-success";
import { Input } from "../ui/input";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMail, MdOutlineLock } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [revealPassword, setRevealPassword] = useState<boolean>(true);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        form.reset();
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Create an account"
      descriptionLabel="Already have an account?"
      backButtonLabel="Sign In"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center max-w-2xl ">
                      <FaRegUserCircle className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
                      <Input
                        {...field}
                        type="text"
                        disabled={isPending}
                        placeholder="John Doe"
                        className="pl-7"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center max-w-2xl ">
                      <MdOutlineMail className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
                      <Input
                        {...field}
                        type="email"
                        disabled={isPending}
                        placeholder="yourname@example.com"
                        className="pl-7"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center max-w-2xl ">
                      <MdOutlineLock className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
                      <Input
                        {...field}
                        type={revealPassword ? "password" : "text"}
                        placeholder="*******"
                        disabled={isPending}
                        className="pl-7"
                      />
                      {revealPassword ? (
                        <FaRegEyeSlash
                          className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500 cursor-pointer"
                          onClick={() => setRevealPassword(!revealPassword)}
                        />
                      ) : (
                        <FaRegEye
                          className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500 cursor-pointer"
                          onClick={() => setRevealPassword(!revealPassword)}
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              Register
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
