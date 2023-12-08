'use client'
// import React from 'react'

import SignInRightSide from '@/app/auth/login/SignInRightSide';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { BasicUserLoginSchema } from "@/types/BasicUserSchema";
import { z } from 'zod'
import useCentralizedStore from "../../../store"

type BasicUserLoginType = z.infer<typeof BasicUserLoginSchema>;

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [isRendered, setIsRendered] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [isSucessful, setIsSucessful] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  })



  // Registration credentials saved at the store
  // You can access the state values from the centralized store in your React components using the useCentralizedStore hook
  const [_email, _password] = useCentralizedStore(state => [state.email, state.password]);

  useEffect(() => {
   setUser({
    email: _email,
    password: _password
   })

  }, [_email, _password])


  const setHandlePasswordClick = useCentralizedStore(state => state.handlePasswordToggleClick);
  const setPasswordToggle = useCentralizedStore(state => state.togglePassword)
  const storeInputType = useCentralizedStore(state => state.inputType)
  

  const {
    register,
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BasicUserLoginType>({
    resolver: zodResolver(BasicUserLoginSchema),
    mode: "onChange", // validate the form on each input's change event
  });

  const handlePasswordToggleClick = () => {
    setTogglePassword(setPasswordToggle)
    setInputType(storeInputType)
    setHandlePasswordClick()
  };

  const [email, password] = watch([
    "email",
    "password",
  ]);

  useEffect(() => {
    if (!errors.email && !isSubmitting) {
      setIsRendered(true);
    }
  }, [errors.email, isSubmitting, email]);

  const onSubmit: SubmitHandler<BasicUserLoginType> = async (data) => {
    try {
      const result = BasicUserLoginSchema.safeParse(data);
      if (result.success) {
        if(data.email === user.email && data.password === user.password){
          setIsSucessful(true)
          console.log("Login successful!")
          router.push("/dashboard");
        }
        else{
          setIsSucessful(false)
          console.log("Login failed!")
        }
       
      }
      console.log("submitted parsed data:...", result);
    } catch (errors) {
      console.error("The following error occurred", errors);
    }
  };

  return (
    <div className="bg-white">
           <div className="">
           <SignInRightSide  
             {...
              {
              setPasswordTouched,
              isLoading,
              isEmpty,
              togglePassword,
              inputType,
              isRendered,
              passwordTouched,
              register,
              control,
              handleSubmit,
              trigger,
              watch,
              errors,
              isSubmitting,
              handlePasswordToggleClick,
              email,
              password,
              onSubmit,
              isSucessful,
              handleButtonClick: () => {
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                }, 2000);
              }
            }}
           />
           </div>
        </div>
  );
};

export default LoginForm;
