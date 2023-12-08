// StepperComponent.js
import React, { useEffect, useState } from "react";
import EmailStep from "./steppers/EmailStep";
import EnterOTPStep from "./steppers/EnterOTPStep";
import BusinessInfoStep from "./steppers/BusinessInfoStep";
import PersonalInformationStep from "./steppers/PersonalInformationStep";
import ResetPinStep from "./steppers/ResetPinStep";
import StepperLeft from "./steppers/StepperLeft";
import { objSteps } from "@/app/lib/objSteps";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BaicUserVerifyOTPSchema,
  BasicUserForgotPasswordSchema,
} from "@/types/BasicUserSchema";
import { z } from "zod";
import clsx from "clsx";
import useStepperStore from "@/store/stepperStore";
import { setOTP_GRPC } from "../api/sendOTP_GRPC";
import { verifyOTP_GRPC } from "../api/verifyOTP_GRPC";

type BasicUserForgotPasswordType = z.infer<
  typeof BasicUserForgotPasswordSchema
>;

type BasicUserVerifyOTPType = z.infer<typeof BaicUserVerifyOTPSchema>;

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isSucessful, setIsSucessful] = useState(false);

  // get email and other states from the store
  const {
    personalInfo,
    currentStep,
    setCurrentStep,
    setSendOtpResponse,
    sendOtpResponse,
    setPersonalInfo
  } = useStepperStore();
  const [prevName, setPrevName] = useState("prev");
  const [nextName, setNextName] = useState("next");
  const [isOTPLoading, setOTPLoading] = useState(false);
  const [message, setMessage] = useState("");

  const EMAIL_STEP_INDEX = objSteps.findIndex(
    (step) => step.description === "enter your email"
  );
  console.log("EMAIL_STEP_INDEX", EMAIL_STEP_INDEX);

  const OTP_STEP_INDEX = objSteps.findIndex(
    (step) => step.description === "verify otp"
  );
  console.log("OTP_STEP_INDEX", OTP_STEP_INDEX);

  const PERSONAL_INFO_STEP_INDEX = objSteps.findIndex(
    (step) => step.description === "pin setup"
  );

  const {
    register,
    control,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BasicUserForgotPasswordType & BasicUserVerifyOTPType>({
    resolver: zodResolver(BasicUserForgotPasswordSchema),
    mode: "onChange", // validate the form on each input's change event
  });

  const _email = watch("email");
  // const otp = watch("otp");

  useEffect(() => {
    if (!errors.email && !isSubmitting) {
      setIsRendered(true);
    }
  }, [errors.email, isSubmitting, personalInfo.email]);

  // sets button's name base on the current step index in the objSteps array of objects above
  useEffect(() => {
    setNextName(
      currentStep === OTP_STEP_INDEX
        ? "verify" :
        currentStep === PERSONAL_INFO_STEP_INDEX  
        ? "Submit" 
        : currentStep === PERSONAL_INFO_STEP_INDEX + 1
        ? "" :
        "next"
    );
  }, [currentStep]);


  // SEND OTP TO EMAIL SECTION
  useEffect(() => {
    if (currentStep === EMAIL_STEP_INDEX + 1) {
      setOTPLoading(true);
      setOTP_GRPC(personalInfo.email, setSendOtpResponse)
        .then(() => {
          if (
            !sendOtpResponse.issuccess &&
            sendOtpResponse.messagesuccessfulorfailed === "SUCCESSFUL"
          ) {
            setMessage(sendOtpResponse.message);
            console.log(
              "Message status from server:",
              (sendOtpResponse).message
            );
          } else {
            setCurrentStep(EMAIL_STEP_INDEX - 1);
            setMessage("Failed to send OTP. Please try again."); // show an error message
          }
          setOTPLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setOTPLoading(false);
          setMessage("An error occurred. Please try again."); // show an error message
        });
    }
  }, [currentStep, personalInfo.email, setSendOtpResponse, setCurrentStep]);

  // OTP VERIFCATION SECTION
  useEffect(() => {
    if (currentStep === OTP_STEP_INDEX + 1) {
      setOTPLoading(true);
      verifyOTP_GRPC(personalInfo.email, personalInfo.otp)
        .then(() => {
          setOTPLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setOTPLoading(false);
        });
    }
  }, [currentStep, personalInfo.otp]);

// // SET PERSONAL INFO INTO THE STORE SECTION
//   useEffect(() => {
//     if (currentStep === PERSONAL_INFO_STEP_INDEX + 1) {
//       setOTPLoading(true);
//       registerGRPC(personalInfo)
//        .then((newInfo) => {
//     setPersonalInfo(newInfo);
//     setOTPLoading(false);
//   })
//   .catch((error) => {
//     console.error(error);
//     setOTPLoading(false);
//   });
//     }
//   }, [currentStep, personalInfo]);





  // Function to render the active page
  const renderActivePage = () => {
    if (isOTPLoading) {
      return (<>
      <p className="p-[3rem] w-full h-full">Loading...</p>
      </>); // replace with your actual loading spinner component
    }
    switch (currentStep) {
      case 0:
        return (
          <EmailStep
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
              isSucessful,
            }}
          />
        );
      case 1:
        return (
          <EnterOTPStep
            {...{
              register,
              watch,
              errors,
              isSucessful,
              message,
              // otp
            }}
          />
        );
      case 2:
        return <PersonalInformationStep />;
      case 3:
        return <BusinessInfoStep />;
      case 4:
        return <ResetPinStep />;

      default:
        return null;
    }
  };

  // Handle the previous and next button clicks
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < objSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="flex items-center">
      {/* LEFT SIDE OF THE STEPPER FORM */}
      <div
        className="flex flex-col h-[93vh] bg-[#5c78e3;] mt-[1.3rem] pt-[10rem] rounded-[14rem]
      leading-[2] pr-[4rem] pl-[4rem] border-solid border-[18px] border-white mx-7  "
      >
        <StepperLeft />
      </div>

      {/* RIGHT SIDE OF THE STEPPER FORM */}
      <div
        style={{ borderTop: "21px solid #18590f" }}
        className="flex flex-col items-center justify-center bg-white w-full p-[2px]"
      >
        <div className="bg-white items-center justify-center p-[2px]">
          {renderActivePage()}
        </div>

        <div className="flex gap-[10rem] mb-5">
          {/* <button disabled={activeStep === 0} onClick={handleBack}  */}
          <button
            onClick={handlePrev}
            className={clsx`bg-[#242424] text-white px-4 py-2 rounded-lg
          ${currentStep === 0 ? "bg-[gray]" : ""}
          `}
            disabled={currentStep < 1}
          >
            {prevName}
          </button>
          <button
            onClick={handleNext}
            className={clsx`bg-[#5c78e3] text-white px-4 py-2 rounded-md
          ${currentStep === objSteps.length - 1 ? "bg-[gray]" : ""}
          `}
            disabled={currentStep === objSteps.length - 1}
          >
            {nextName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
