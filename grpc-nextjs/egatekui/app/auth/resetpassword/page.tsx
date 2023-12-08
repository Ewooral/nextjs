import React from 'react'
import ResetPassword from './ResetPassword'

const page = () => {
  return (
    <div>
        <ResetPassword />
    </div>
  )
}

export default page
// "use client";
// import ResetPassword from "./ResetPassword";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { BasicUserResetPasswordSchema } from "@/types/BasicUserSchema";
// import { z } from "zod";
// import useCentralizedStore from "../../store";

// type BasicUserResetPasswordType = z.infer<typeof BasicUserResetPasswordSchema>;

// const page = () => {
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false);
//     const [isEmpty, setIsEmpty] = useState(false);
//     const [togglePassword, setTogglePassword] = useState(false);
//     const [inputType, setInputType] = useState("password");
//     const [isRendered, setIsRendered] = useState(false);
//     const [passwordTouched, setPasswordTouched] = useState(false);
//     const [isSucessful, setIsSucessful] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     trigger,
//     watch,
//     formState: { errors, isSubmitting },
//   } = useForm<BasicUserResetPasswordType>({
//     resolver: zodResolver(BasicUserResetPasswordSchema),
//     mode: "onChange", // validate the form on each input's change event
//   });

//   const password = watch("password");
//   const confirmPassword = watch("confirmPassword");


//   const setHandlePasswordClick = useCentralizedStore(state => state.handlePasswordToggleClick);
//   const setPasswordToggle = useCentralizedStore(state => state.togglePassword)
//   const storeInputType = useCentralizedStore(state => state.inputType)


//   const handlePasswordToggleClick = () => {
//     setTogglePassword(setPasswordToggle)
//     setInputType(storeInputType)
//     setHandlePasswordClick()
//   };


//   useEffect(() => {
//     if (!errors.password && !errors.confirmPassword && !isSubmitting) {
//       setIsRendered(true);
//     }
//   }, [errors.password, isSubmitting, password, confirmPassword]);

//   const onSubmit: SubmitHandler<BasicUserResetPasswordType> = async (data) => {
//     try {
//       const result = BasicUserResetPasswordSchema.safeParse(data);
//       if (result.success) {
//         //
//       }
//       console.log("submitted parsed data:...", result);
//     } catch (errors) {
//       console.error("The following error occurred", errors);
//     }
//   };

//   return (
//     <div>
//       <ResetPassword
//            {...{
//               isLoading,
//               isRendered,
//               register,
//               handleSubmit,
//               trigger,
//               watch,
//               errors,
//               isSubmitting,
//               onSubmit,
//               isSucessful,
//               password,
//               confirmPassword,
//               togglePassword,
//               inputType,
//               handlePasswordToggleClick
//           }}      />
//     </div>
//   );
// };

// export default page;
