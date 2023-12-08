
import React, { useEffect } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import ThumbUpOffAltTwoToneIcon from "@mui/icons-material/ThumbUpOffAltTwoTone";
import Image from "next/image";
import useStepperStore from "@/store/stepperStore";


const EmailStep: React.FC<forgotPasswordFormTypes> = ({
  register,
  errors,
  isRendered,
  watch,
  email
}) => {
  const { setEmail } = useStepperStore(state => ({ email: state.personalInfo.email, setEmail: state.setEmail }));  
  const myEmail =  watch('email')
  console.log("Email: ",  myEmail)
  useEffect(() =>  setEmail(myEmail)
  , [myEmail]);
  return (
    <>
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center px-[2rem] py-[4rem] xl:px-[1rem] xl:py-[1rem]"
      >
        <div className="flex flex-col px-5 my-auto max-md:max-w-full max-md:mt-10">
          <div className="self-stretch text-2xl font-bold leading-8 tracking-wide text-center text-slate-900 max-md:max-w-full">
            Enter your email
          </div>
          <p className="text-center text-xs leading-5 text-[#707070] mt-2">
            Kindly provide an email address you want to use for your registration. Email addresses must
            be valid.
          </p>

          {/* ........................ EMAIL INPUT...................................... */}
          <div
            className={`items-stretch self-stretch border border-[color:var(--greyscale-200,#E2E8F0)] flex gap-3 mt-8 pl-4 pr-20 py-4 
              rounded-xl border-solid max-md:max-w-full flex-unwrap max-md:pr-5,
                ${
                  errors.email
                    ? "border-pink-500"
                    : email != "" && !errors.email && isRendered
                    ? "border-green-500"
                    : " "
                }
              `}
          >
            <Image
              width={24}
              height={24}
              // src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9648b57-d7bf-43c9-9d1f-70175a450e2a?apiKey=efca4811fd144921868a8a908fb73e83&"
              src="/email.svg"
              alt="Profile Image"
              className="items-center justify-center object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
            />
            <input
              type="email"
              className="px-2 py-1 ml-2 outline-none w-[79%] sm:w-[90%] md:w-full"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>

          {/* ERROR MESSAGE */}
          {email != "" && !errors.email && isRendered && (
            <div className="flex items-center self-start text-xs font-medium leading-5 text-green-800 justify-evenly grow shrink basis-auto max-md:max-w-full">
              <motion.span
                className="mr-5"
                initial={{ scale: 1 }} // start at normal size
                animate={{ scale: [1, 1.5, 1] }} // animate scale to create a bounce effect
                transition={{ duration: 1 }} // transition duration in seconds
              >
                This Guy!
              </motion.span>
              <motion.div
                className="text-sm"
                initial={{ opacity: 0 }} // start invisible
                animate={{ opacity: 1 }} // animate to full opacity
                transition={{ delay: 1, duration: 1 }} // start the animation after a delay
              >
                <ThumbUpOffAltTwoToneIcon className="text-[16px]" />
              </motion.div>
            </div>
          )}
          {errors.email && (
            <div className="flex items-stretch self-stretch justify-between gap-2 mt-3 max-md:max-w-full max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/077c7c8d-06dc-44e1-abfd-7ac35c167494?apiKey=efca4811fd144921868a8a908fb73e83&"
                className="items-center justify-center object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
              />
              <p className="self-start text-xs font-medium leading-5 text-pink-500 grow shrink basis-auto max-md:max-w-full">
                {errors.email.message}
              </p>
            </div>
          )}
            {/* <button
              onClick={() => trigger()}
              className={`items-center self-stretch justify-center px-5 py-4 mt-8 text-base font-bold leading-6 
                tracking-wide text-center text-white bg-blue-600 rounded-xl max-md:max-w-full`}
            >
              Continue
            </button> */}
          {/* CONTINUE BUTTON */}

          {/* .................................OTHERS...................................... */}

          {/* <div className="flex flex-col items-center self-center justify-around mt-10 text-sm font-medium leading-6 text-center">
            <Link className="mb-[23rem]" href={"/auth/login"}>
              <span className="font-bold text-blue-600">Back to Sign In!</span>
            </Link>
            <span className=" text-slate-900">
              Don't have an account?{" "}
              <span className="text-blue-600">
                <Link href={"/auth/register"}>Sign Up</Link>
              </span>
            </span>
          </div> */}
        </div>
      </form>
    </>
  );
};

export default EmailStep;
