"use client";
import ForgotPasswordForm from "./VerifyOtpForm";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { BaicUserVerifyOTPSchema } from "@/types/BasicUserSchema";
import { z } from "zod";
import useCentralizedStore from "../../../store";

type BasicUserVerifyOTPType = z.infer<
  typeof BaicUserVerifyOTPSchema
>;

const page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isSucessful, setIsSucessful] = useState(false);


  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BasicUserVerifyOTPType>({
    resolver: zodResolver(BaicUserVerifyOTPSchema),
    mode: "onChange", // validate the form on each input's change event
  });

  const otp = watch("otp");

  useEffect(() => {
    if (!errors.otp && !isSubmitting) {
      setIsRendered(true);
    }
  }, [errors.otp, isSubmitting, otp]);

  const onSubmit: SubmitHandler<BasicUserVerifyOTPType> = async (data) => {
    try {
      const result = BaicUserVerifyOTPSchema.safeParse(data);
      if (result.success) {
        //
      }
      console.log("submitted parsed data:...", result);
    } catch (errors) {
      console.error("The following error occurred", errors);
    }
  };

  return (
    <div>
      <ForgotPasswordForm
        {...{
          isLoading,
          isRendered,
          register,
          handleSubmit,
          trigger,
          watch,
          errors,
          isSubmitting,
          onSubmit,
          isSucessful,
          otp
        }}
      />
    </div>
  );
};

export default page;
