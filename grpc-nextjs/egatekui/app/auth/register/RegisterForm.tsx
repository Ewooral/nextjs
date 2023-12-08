// import React from 'react'

import SignUpRightSide from '@/app/auth/register/SignUpRightSide';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { BasicUserSchema } from "@/types/BasicUserSchema";
import { z } from 'zod'
import useCentralizedStore from "../../../store"
// import useRegister from '@/app/hooks/useRegister';


// gRPC client generated files
import {AuthServiceClient} from "@/proto/generated/BankServiceClientPb"
import {RegisterRequest} from "@/proto/generated/bank_pb"

type BasicUserType = z.infer<typeof BasicUserSchema>;

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [isRendered, setIsRendered] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  //useRegister Hook to access gRPC info


  // You can access the state values from the centralized store in your React components using the useCentralizedStore hook
  const _username = useCentralizedStore(state => state.username);
  const _email = useCentralizedStore(state => state.email);
  const _password = useCentralizedStore(state => state.password);


  const setRegistrationState = useCentralizedStore(state => state.setRegistrationState);

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setRegistrationState({ [name]: value });
  };

  const {
    register,
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BasicUserType>({
    resolver: zodResolver(BasicUserSchema),
    mode: "onChange", // validate the form on each input's change event
  });

  const handlePasswordToggleClick = () => {
    setTogglePassword((prevTogglePassword) => !prevTogglePassword);
    setInputType(inputType === "password" ? "text" : "password");
  };

  const [username, email, password] = watch([
    "username",
    "email",
    "password",
  ]);

  useEffect(() => {
    if (!errors.username && !isSubmitting) {
      setIsRendered(true);
    }
  }, [errors.username, isSubmitting, username, email]);

  const onSubmit: SubmitHandler<BasicUserType> = async (data) => {
    try {
      const result = BasicUserSchema.safeParse(data);
      if (result.success) {
        setRegistrationState({ ...data });
        await new Promise<void>((resolve) => {
          // setOTP_GRPC(data)
          resolve()
          router.push("/auth/login");
        })
       
      }
     
     
      console.log("submitted parsed data:...", result);
    } catch (errors) {
      console.error("The following error occurred", errors);
    }
  };

  return (
    <div className="bg-white">
           <div className="">
           <SignUpRightSide  
             {...
              {
                handleInputChange,
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
              username,
              email,
              password,
              onSubmit,
            }}
           />
           </div>
        </div>
  );
};

export default RegisterForm;
