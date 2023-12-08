import React from 'react'

const ResetPassword = () => {
  return (
    <div>ResetPassword</div>
  )
}

export default ResetPassword




// import React from "react";
// import clsx from "clsx";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import { Controller } from "react-hook-form";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import CheckIcon from "@mui/icons-material/Check";
// import ThumbUpOffAltTwoToneIcon from "@mui/icons-material/ThumbUpOffAltTwoTone";
// import Image from "next/image";

// const ResetPassword: React.FC<ResetPasswordTypes> = ({
//   register,
//   handleSubmit,
//   trigger,
//   errors,
//   isSubmitting,
//   onSubmit,
//   isRendered,
//   isSuccessful,
//   confirmPassword,
//   password,
//   control,
//   setPasswordTouched,
//   togglePassword,
//   handlePasswordToggleClick,
//   inputType,

// }) => {
//   return (
//     <>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex justify-center items-center px-[2rem] py-[4rem] xl:px-[6rem] xl:py-[6rem]"
//       >
//         <div className="flex flex-col px-5 my-auto max-md:max-w-full max-md:mt-10">
//           <div className="text-center self-stretch text-2xl font-bold leading-8 tracking-wide text-slate-900 max-md:max-w-full">
//            Reset Password
//           </div>
//           <p className="text-xs leading-5 text-[#707070] mt-2">
//           Reset Resset your password to continue using the app.  
//           </p>


//           {/* ........................ PASSWORD INPUT...................................... */}
//           <div
//             className={`items-stretch self-stretch border border-[color:var(--greyscale-200,#E2E8F0)] flex gap-3 mt-8 pl-4 pr-20 py-4 rounded-xl 
//               border-solid max-md:max-w-full  flex-unwrap max-md:pr-5,
//               ${
//                 errors.password
//                   ? "border-pink-500"
//                   : password != "" && !errors.password && isRendered
//                   ? "border-green-500"
//                   : " "
//               }
//               `}
//           >
//              <Image
//               width={24}
//               height={24}
//               // src="https://cdn.builder.io/api/v1/image/assets/TEMP/724ee66d-300a-4f07-acd7-ecb36ffa41e0?apiKey=efca4811fd144921868a8a908fb73e83&"
//               src="/password.svg"
//               alt="Profile Image"
//               className="items-center justify-center object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
//             />
//             <Controller
//               name="password"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <input
//                   {...field}
//                   type={inputType}
//                   className="px-2 py-1 ml-2 outline-none w-[79%] sm:w-[90%] md:w-full"
//                   placeholder="Password"
//                   {...register("password", { required: true })}
//                   onBlur={() => {
//                     setPasswordTouched && setPasswordTouched(true);
//                     field.onBlur();
//                   }}
//                 />
//               )}
//             />

//             <div>
//               {togglePassword ? (
//                 <VisibilityIcon
//                   onClick={handlePasswordToggleClick}
//                   className="items-center justify-center text-[1.4rem]  cursor-pointer  mr-[-4rem] text-[#9b9999] ml-[2rem]"
//                 />
//               ) : (
//                 <VisibilityOffIcon
//                   onClick={handlePasswordToggleClick}
//                   className="items-center justify-center text-[1.4rem]  cursor-pointer mr-[-4rem] text-[#9b9999] ml-[2rem]"
//                 />
//               )}
//             </div>
//           </div>

//           {/* ERROR MESSAGE */}
//           {password != "" && !errors.password && isRendered && (
//             <div className="flex items-center self-start text-xs font-medium leading-5 text-green-800 justify-evenly grow shrink basis-auto max-md:max-w-full">
//             <motion.span
//               className="mr-5"
//               initial={{ scale: 1 }} // start at normal size
//               animate={{ scale: [1, 1.5, 1] }} // animate scale to create a bounce effect
//               transition={{ duration: 1 }} // transition duration in seconds
//             >
//               This Guy!
//             </motion.span>
//             <motion.div
//               className="text-sm"
//               initial={{ opacity: 0 }} // start invisible
//               animate={{ opacity: 1 }} // animate to full opacity
//               transition={{ delay: 1, duration: 1 }} // start the animation after a delay
//             >
//               <ThumbUpOffAltTwoToneIcon className="text-[16px]" />
//             </motion.div>
//           </div>
//           )}

//           {errors.password && (
//             <div className="flex items-stretch self-stretch justify-between gap-2 mt-3 max-md:max-w-full max-md:flex-wrap">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/077c7c8d-06dc-44e1-abfd-7ac35c167494?apiKey=efca4811fd144921868a8a908fb73e83&"
//                 className="items-center justify-center object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
//               />
//               <p className="self-start text-xs font-medium leading-5 text-pink-500 grow shrink basis-auto max-md:max-w-full">
//                 {errors.password.message}
//               </p>
//             </div>
//           )}

//             ..........................CONFIRM PASSWORD INPUT....................................
//             <div
//             className={`flex items-center self-start text-xs font-medium leading-5 text-gray-500 justify-evenly grow shrink basis-auto max-md:max-w-full`}
//             >
//             <input
//             {...register("confirmPassword", {
//                 required: "Confirm Password is required",
//                 validate: (value: string) =>
//                 value === password || "Confirm Password does not match",
//             })}
//             className="items-center justify-center text-[1.4rem]  cursor-pointer  mr-[-4rem] text-[#9b9999] ml-[2rem]"
//             />
//             <div className="flex items-center self-start text-xs font-medium leading-5 text-gray-500 justify-evenly grow shrink basis-auto max-md:max-w-full">
//             <motion.span
//             className="mr-5"
//             initial={{ scale: 1 }} // start at normal size
//             animate={{ scale: [1, 1.5, 1] }} // animate scale to create a bounce effect
//             transition={{ duration: 1 }} // transition
//             >
//             Confirm Password
//             </motion.span>
//             <motion.div
//             className="text-sm"
//             initial={{ opacity: 0 }} // start invisible
//             animate={{ opacity: 1 }} // animate to full opacity
//             transition={{ delay: 1, duration: 1 }} // start the animation after a delay
//             ></motion.div>
//             </div>
//             </div>
//             {errors.confirmPassword && (
//                 <div className="flex items-stretch self-stretch justify-between gap-2 mt-3 max-md:max-w-full max-md:flex-wrap">
//                 <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/077c7c8d-06dc-44e1-abfd-7ac35c167494?apiKey=efca4811fd144921868a8a908fb73e83&"
//                 className="items-center justify-center object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
//                 />
//                 <p className="self-start text-xs font-medium leading-5 text-pink-500 grow shrink basis-auto max-md:max-w-full">
//                 {errors.confirmPassword.message}
//                 </p>
//                 </div>
//                 )}
                


//           {/* CONTINUE BUTTON */}
//           <button
//             onClick={() => trigger()}
//             className={`items-center self-stretch justify-center px-5 py-4 mt-8 text-base font-bold leading-6 
//                 tracking-wide text-center text-white bg-blue-600 rounded-xl max-md:max-w-full`}
//           >
//             Reset
//           </button>

//           {/* .................................OTHERS...................................... */}
         
//           <div className="flex flex-col items-center self-center justify-around mt-10 text-sm font-medium leading-6 text-center">
//             <Link className="mb-[23rem]" href={"/auth/login"}>
//               <span className="font-bold text-blue-600">Back to Sign In!</span>
//             </Link>
//             <span className=" text-slate-900">
//               Don't have an account?{" "}
//               <span className="text-blue-600">
//                 <Link href={"/auth/register"}>Sign Up</Link>
//               </span>
//             </span>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default ResetPassword;
