import React from "react";
import { objSteps } from "@/app/lib/objSteps";
import clsx from "clsx";
import useStepperStore from "@/store/stepperStore";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";

const StepperLeft = () => {
  const { currentStep, setCurrentStep, lastValidatedStep, previousStep } =
    useStepperStore();

  return (
    <>
      {objSteps.map((objStep, index) => (
        <>
          <div
            key={index}
            className={clsx(
              "p-[.4rem] bg-[#ffffff] rounded-[70px] h-[40px] flex flex-col justify-center items-center w-[40px]",
              index <= currentStep &&
                "bg-green-800 text-[#ffffff] border-[4px] border-white",

            )}
          >
            {/* I am rendering a material ui icon from the objSteps file  */}
            {<objStep.imageSrc className={clsx`w-[20px] h-[20px]`} />}
          </div>
          <span
            className={clsx` h-[70px] flex flex-col border-solid border-[2px] border-white
              justify-center items-center self-center
         ${
           index <= currentStep
             ? "border-solid border-[2px] border-green-800"
             : index === lastValidatedStep
             ? `border-none `
             : "null"
         }
       
        `}
          ></span>
        </>
      ))}
    </>
  );
};

export default StepperLeft;
