"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { FormError } from "@/components/shared/form-error";
import { FormSuccess } from "@/components/shared/form-success";
import { login } from "@/actions/auth/login";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MdOutlineMail, MdOutlineLock } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data?.error);
          }
          if (data?.success) {
            setSuccess(data?.success);
          }
          //   if (data?.twoFactor) {
          //     setShowTwoFactor(true);
          //   }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <CardWrapper
      headerLabel="Sign in to your account"
      descriptionLabel="Dont have an account?"
      backButtonLabel="Sign up"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Two Factor Code</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        disabled={isPending}
                        placeholder="123456"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="font-medium">
                        Email address
                      </FormLabel>
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
                    <FormItem className="space-y-1">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative flex items-center max-w-2xl ">
                          <MdOutlineLock className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
                          <Input
                            {...field}
                            type="password"
                            placeholder="*******"
                            disabled={isPending}
                            className="pl-7"
                          />
                        </div>
                      </FormControl>
                      <div className="flex flex-row justify-between items-center pt-1">
                        <div className="flex items-center space-x-1">
                          <Checkbox />
                          <label
                            htmlFor="terms2"
                            className="text-xs font-medium text-textsecondary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Remember me
                          </label>
                        </div>
                        <Button
                          size={"sm"}
                          variant={"link"}
                          asChild
                          className="px-0 font-medium text-textmain underline"
                        >
                          <Link href={"/auth/reset"}>Forgot Password ?</Link>
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <Button
              type="submit"
              className="w-full rounded-xl font-normal"
              disabled={form.formState.isSubmitting}
            >
              {showTwoFactor ? "Confirm" : "Sign In"}
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
