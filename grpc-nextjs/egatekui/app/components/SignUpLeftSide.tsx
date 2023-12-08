"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useStep } from "@/store/centralizedStore";

const SignUpLeftSide: React.FC<MyUpdatedComponentProps> = ({
  logoSrc,
  title,
  imageSrcSet,
}) => {
  const { step, setStep } = useStep();
  const steps = [
    "/auth/register",
    "/auth/login",
    "/auth/forgotpassword",
    "/auth/verifyotp",
    "/auth/resetpassword",
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0 h-[100lvh]">
      <div className="flex flex-col w-full py-12 pl-12 pr-20 bg-blue-600 grow max-md:max-w-full max-md:mt-10 max-md:px-5">
        <header className="justify-center items-stretch flex gap-3 ml-2.5">
          <Image
            loading="lazy"
            src={logoSrc}
            alt="Logo"
            width={24}
            height={24}
          />

          <h1 className="text-white text-3xl font-bold leading-9 tracking-tight grow whitespace-nowrap mt-1.5 self-start">
            {title}
          </h1>
        </header>


         <div className="self-stretch flex flex-col justify-center items-center ml-2.5 mt-16 px-16 py-11 rounded-[50%] max-md:max-w-full max-md:mr-2.5 max-md:mt-10 max-md:px-5">
          <button className="aspect-[0.91] object-contain object-center w-[372px] overflow-hidden max-w-full mt-7">
            <Image
              loading="lazy"
              src={imageSrcSet}
              alt="Image"
              width={500}
              height={500}
            />
          </button>
        </div> 

        <div className="text-white text-center text-2xl font-bold leading-8 tracking-wide max-w-[466px] self-center mt-12 max-md:max-w-full max-md:mt-10">
          Customizable Multipurpose Dashboard
        </div>
        <div className="self-center max-w-sm mt-3 text-sm leading-6 text-center text-slate-50 opacity-70">
          Everything you need in an easily customizable dashboard.
        </div>
        <div className="items-stretch self-center flex w-[62px] max-w-full gap-4 mt-10 mb-6 max-md:justify-center">
          <div className="flex shrink-0 h-2.5 flex-col flex-1 rounded-[50%]" />
          <div className="opacity-20 flex shrink-0 h-2.5 flex-col flex-1 rounded-[50%]" />
          <div className="opacity-20 flex shrink-0 h-2.5 flex-col flex-1 rounded-[50%]" />
        </div>



        {/*................. FORM STEPPER................ */}

        <div className="flex justify-center items-center">
          {step > 0 && (
            <Link href={steps[step - 1]}>
              <button className="bg-white p-3 m-3 rounded-lg" onClick={handlePrevious}>
                Previous
              </button>
            </Link>
          )}
          {step < steps.length - 1 && (
            <Link href={steps[step + 1]}>
              <button className="bg-white p-3 m-3 rounded-lg" onClick={handleNext}>
                Next
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
// const SignUpLeftSide: React.FC<MyUpdatedComponentProps> = ({
//   logoSrc,
//   title,
//   imageSrcSet,
// }) => {
//   const handleButtonClick = () => {
//     // Handle button click event here
//   };

//   return (
//     <div className="flex flex-col items-start px-20 pt-12 pb-16 bg-blue-600 max-md:px-5">
//       <header className="justify-center items-stretch flex gap-3 ml-2.5">
//         <button
//           onClick={handleButtonClick}
//           className="aspect-square object-contain object-center w-[33px] fill-white overflow-hidden shrink-0 max-w-full"
//         >
//           <Image loading="lazy" src={logoSrc} alt="Logo" width={24} height={24}/>
//         </button>
//         <h1 className="text-white text-3xl font-bold leading-9 tracking-tight grow whitespace-nowrap mt-1.5 self-start">
//           {title}
//         </h1>
//       </header>
//       <div className="self-stretch flex flex-col justify-center items-center ml-2.5 mt-16 px-16 py-11 rounded-[50%] max-md:max-w-full max-md:mr-2.5 max-md:mt-10 max-md:px-5">
//         <button
//           onClick={handleButtonClick}
//           className="aspect-[0.91] object-contain object-center w-[372px] overflow-hidden max-w-full mt-7"
//         >
//           <Image loading="lazy" src={imageSrcSet} alt="Image" width={300}  height={300}/>
//         </button>
//       </div>
//       <form className="items-stretch self-center flex w-[62px] max-w-full gap-4 mt-40 mb-6 max-md:justify-center max-md:mt-10">
//         <button
//           onClick={handleButtonClick}
//           className="flex shrink-0 h-2.5 flex-col flex-1 rounded-[50%]"
//         />
//         <button
//           onClick={handleButtonClick}
//           className="flex shrink-0 h-2.5 flex-col flex-1 rounded-[50%]"
//         />
//         <button
//           onClick={handleButtonClick}
//           className="flex shrink-0 h-2.5 flex-col flex-1 rounded-[50%]"
//         />
//       </form>
//     </div>
//   );
// };

export default SignUpLeftSide;
