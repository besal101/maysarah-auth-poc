"use client";

import { Card, CardContent } from "@/components/ui/card";
import { startTransition, useEffect, useState } from "react";

import { TbNumber1Small, TbNumber2Small, TbNumber3Small } from "react-icons/tb";
import { MdCheck } from "react-icons/md";

import StepOne from "./_components/StepOne";
import StepThree from "./_components/StepThree";
import StepTwo from "./_components/StepTwo";
import { currentStep } from "@/actions/seller/steps";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/navigation";

const SellerSetupPage = () => {
  const [steps, setSteps] = useState("stepone");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const isPending = false;

  const handleSteps = (step: string) => {
    setSteps(step);
  };

  const router = useRouter();

  useEffect(() => {
    startTransition(() => {
      currentStep()
        .then((data) => {
          setLoading(false);
          if (data.success?.step_completed === 1) {
            setSteps("steptwo");
          }
          if (data.success?.step_completed === 2) {
            setSteps("stepthree");
          }
          if (data.success?.step_completed === 3) {
            router.push("/seller/setup/pending");
          }
        })
        .catch(() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        });
    });
  }, [router, toast]);

  return (
    <div className="grid grid-cols-4 gap-4 font-poppins">
      <Card className="col-span-1 px-6 py-6">
        <CardContent>
          <div className="col-span-12 grid lg:col-span-2 gap-4 px-4 py-4">
            <div className="flex flex-col justify-between gap-2 max-h-[220px]">
              <div className="flex flex-row items-center gap-2">
                <div
                  className={`${
                    steps === "steptwo" || steps === "stepthree"
                      ? "bg-primary"
                      : "bg-blue-500"
                  }  w-10 h-10 items-center flex justify-center rounded-full`}
                >
                  {steps === "steptwo" || steps === "stepthree" ? (
                    <MdCheck color="white" size={24} />
                  ) : (
                    <TbNumber1Small color="white" size={24} />
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-500 text-xs">Step 1</span>
                  <span className="text-sm">General</span>
                </div>
              </div>
              <div className="w-2 h-6 bg-secondary flex justify-center ml-4 rounded-lg" />
              <div className="flex flex-row items-center gap-2">
                <div
                  className={`${
                    steps === "stepthree" ? "bg-primary" : "bg-blue-500"
                  }  w-10 h-10 items-center flex justify-center rounded-full`}
                >
                  {steps === "stepthree" ? (
                    <MdCheck color="white" size={24} />
                  ) : (
                    <TbNumber1Small color="white" size={24} />
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-500 text-xs">Step 2</span>
                  <span className="text-sm">Personal</span>
                </div>
              </div>
              <div className="w-2 h-6 bg-secondary flex justify-center ml-4 rounded-lg" />
              <div className="flex flex-row items-center gap-2">
                <div className="bg-blue-500 w-10 h-10 items-center flex justify-center rounded-full">
                  <TbNumber3Small color="white" size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-500 text-xs">Step 3</span>
                  <span className="text-sm">Documents</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-3 px-6 py-2">
        {loading ? (
          <div className="h-full w-auto flex justify-center items-center">
            <BeatLoader size={25} color="hsl(179, 59%, 32%)" />
          </div>
        ) : (
          <>
            {steps === "stepone" && <StepOne handleSteps={handleSteps} />}
            {steps === "steptwo" && <StepTwo handleSteps={handleSteps} />}

            {steps === "stepthree" && <StepThree />}
          </>
        )}
      </Card>
    </div>
  );
};

export default SellerSetupPage;
