"use client";
import ForgotPasswordForm from "./ForgotPasswordForm";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { BasicUserForgotPasswordSchema } from "@/types/BasicUserSchema";
import { z } from "zod";
import useCentralizedStore from "../../../store";

type BasicUserForgotPasswordType = z.infer<
  typeof BasicUserForgotPasswordSchema
>;

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isSucessful, setIsSucessful] = useState(false);

  const [user, setUser] = useState({
    email: "",
  });

  // Registration credentials saved at the store
  // You can access the state values from the centralized store in your React components using the useCentralizedStore hook
  const [_email, _password] = useCentralizedStore((state) => [
    state.email,
    state.password,
  ]);

  useEffect(() => {
    setUser({
      email: _email,
    });
  }, [_email]);



  const {
    register,
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BasicUserForgotPasswordType>({
    resolver: zodResolver(BasicUserForgotPasswordSchema),
    mode: "onChange", // validate the form on each input's change event
  });

  const email = watch("email");

  useEffect(() => {
    if (!errors.email && !isSubmitting) {
      setIsRendered(true);
    }
  }, [errors.email, isSubmitting, email]);

  const onSubmit: SubmitHandler<BasicUserForgotPasswordType> = async (data) => {
    try {
      const result = BasicUserForgotPasswordSchema.safeParse(data);
      if (result.success) {
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
          control,
          handleSubmit,
          trigger,
          watch,
          errors,
          isSubmitting,
          email,
          onSubmit,
          isSucessful,
          handleButtonClick: () => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
            }, 2000);
          },
        }}
      />
    </div>
  );
};

export default page;
