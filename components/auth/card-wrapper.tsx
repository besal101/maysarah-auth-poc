"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";
import { Separator } from "@/components/ui/separator";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  descriptionLabel?: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  descriptionLabel,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader className="space-y-0">
        <Header label={headerLabel} />
        <div className="flex justify-center items-center gap-0">
          <span className="text-nowrap text-xs">{descriptionLabel}</span>
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <span className="text-[10px] text-textsecondary text-center">
          By creating an account you agree with our{" "}
          <span className="underline">Terms of Service</span>,{" "}
          <span className="underline">Privacy Policy</span>, and our default
          <span className="underline"> {"  "}Notification Settings</span>.
        </span>
      </CardFooter>
    </Card>
  );
};
