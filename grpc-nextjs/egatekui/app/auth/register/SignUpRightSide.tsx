import React from "react";
import clsx from "clsx";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Controller } from "react-hook-form";
import Link from "next/link";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";

const SignUpRightSide: React.FC<RegisterFormTypes> = ({
  setPasswordTouched,
  togglePassword,
  inputType,
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
  isRendered,
}) => {
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-[2rem] py-[4rem] xl:px-[6rem] xl:py-[6rem]"
      >
        <div className="flex flex-col px-5 my-auto max-md:max-w-full max-md:mt-10">
          <div className="text-center self-stretch text-2xl font-bold leading-8 tracking-wide text-slate-900 max-md:max-w-full">
            Sign Up for an Account
          </div>
          {/* ........................ USERNAME INPUT...................................... */}
          <div
            className={clsx`items-stretch self-stretch border border-[color:var(--greyscale-200,#E2E8F0)] flex gap-3 mt-8 pl-4 pr-20 py-4 
              rounded-xl border-solid max-md:max-w-full flex-unwrap max-md:pr-5,             
              ${
                errors.username
                  ? "border-pink-500"
                  : username != "" && !errors.username && isRendered
                  ? "border-green-500"
                  : " "
              }
                
               
              `}
          >
            <Image
            width={24}
            height={24}
              // src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd38745-416b-45ae-a353-af12dbca7398?apiKey=efca4811fd144921868a8a908fb73e83&"
              src="/usernameIcon.svg"
              alt="Profile Image"
              className="items-center justify-center object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
            />
            <input
              type="text"
              className="px-2 py-1 ml-2 outline-none w-[79%] sm:w-[90%] md:w-full"
              placeholder="Username"
              {...register("username", { required: true })}
            />
          </div>

          {/* ERROR MESSAGE */}
          {username != "" && !errors.username && isRendered && (
             <div className="flex items-center self-start text-xs font-medium leading-5 text-green-800 justify-evenly grow shrink basis-auto max-md:max-w-full">
              <motion.span
                className="mr-5"
                initial={{ scale: 1 }} // start at normal size
                animate={{ scale: [1, 1.5, 1] }} // animate scale to create a bounce effect
                transition={{ duration: 1 }} // transition duration in seconds
              >
                Solid Guy!
              </motion.span>
              <motion.div
                className="text-sm"
                initial={{ opacity: 0 }} // start invisible
                animate={{ opacity: 1 }} // animate to full opacity
                transition={{ delay: 1, duration: 1 }} // start the animation after a delay
              >
                <CheckIcon className="text-[14px]" />
              </motion.div>
            </div>
          )}

          {errors.username && (
            <div
              className={clsx`flex items-stretch self-stretch justify-between gap-2 mt-3 max-md:max-w-full max-md:flex-wrap,
                    ${errors.username && "text-pink-500"}
                    
                    `}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/077c7c8d-06dc-44e1-abfd-7ac35c167494?apiKey=efca4811fd144921868a8a908fb73e83&"
                className="items-center justify-center object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
              />
              <p className="self-start text-xs font-medium leading-5 text-pink-500 grow shrink basis-auto max-md:max-w-full">
                {errors.username.message}
              </p>
            </div>
          )}

          {/* ........................ EMAIL INPUT...................................... */}
          <div
            className={`items-stretch self-stretch border border-[color:var(--greyscale-200,#E2E8F0)] flex gap-3 mt-8 pl-4 pr-20 py-4 
              rounded-xl border-solid max-md:max-w-full flex-unwrap max-md:pr-5,
                ${
                  errors.email
                    ? "border-pink-500"
                    : email != "" && isRendered
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
                Solid Guy!
              </motion.span>
              <motion.div
                className="text-sm"
                initial={{ opacity: 0 }} // start invisible
                animate={{ opacity: 1 }} // animate to full opacity
                transition={{ delay: 1, duration: 1 }} // start the animation after a delay
              >
                <CheckIcon className="text-[14px]" />
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

          {/* ........................ PASSWORD INPUT...................................... */}
          <div
            className={`items-stretch self-stretch border border-[color:var(--greyscale-200,#E2E8F0)] flex gap-3 mt-8 pl-4 pr-20 py-4 rounded-xl 
              border-solid max-md:max-w-full  flex-unwrap max-md:pr-5,
                ${
                  errors.password
                    ? "border-pink-500"
                    : password != "" && isRendered
                    ? "border-green-500"
                    : " "
                }
              `}
          >
            <Image
            width={24}
            height={24}
              // src="https://cdn.builder.io/api/v1/image/assets/TEMP/724ee66d-300a-4f07-acd7-ecb36ffa41e0?apiKey=efca4811fd144921868a8a908fb73e83&"
              src="/password.svg"
              alt="Profile Image"
              className="items-center justify-center object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type={inputType}
                  className="px-2 py-1 ml-2 outline-none w-[79%] sm:w-[90%] md:w-full"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  onBlur={() => {
                    setPasswordTouched && setPasswordTouched(true);
                    field.onBlur();
                  }}
                />
              )}
            />

            <div>
              {togglePassword ? (
                <VisibilityIcon
                  onClick={handlePasswordToggleClick}
                  className="items-center justify-center text-[1.4rem]  cursor-pointer  mr-[-4rem] text-[#9b9999] ml-[2rem]"
                />
              ) : (
                <VisibilityOffIcon
                  onClick={handlePasswordToggleClick}
                  className="items-center justify-center text-[1.4rem]  cursor-pointer mr-[-4rem] text-[#9b9999] ml-[2rem]"
                />
              )}
            </div>
          </div>

          {/* ERROR MESSAGE */}
          {password != "" && !errors.password && isRendered && (
             <div className="flex items-center self-start text-xs font-medium leading-5 text-green-800 justify-evenly grow shrink basis-auto max-md:max-w-full">
              <motion.span
                className="mr-5"
                initial={{ scale: 1 }} // start at normal size
                animate={{ scale: [1, 1.5, 1] }} // animate scale to create a bounce effect
                transition={{ duration: 1 }} // transition duration in seconds
              >
                Solid Guy!
              </motion.span>
              <motion.div
                className="text-sm"
                initial={{ opacity: 0 }} // start invisible
                animate={{ opacity: 1 }} // animate to full opacity
                transition={{ delay: 1, duration: 1 }} // start the animation after a delay
              >
                <CheckIcon className="text-[14px]" />
              </motion.div>
            </div>
          )}

          {errors.password && (
            <div className="flex items-stretch self-stretch justify-between gap-2 mt-3 max-md:max-w-full max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/077c7c8d-06dc-44e1-abfd-7ac35c167494?apiKey=efca4811fd144921868a8a908fb73e83&"
                className="items-center justify-center object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
              />
              <p className="self-start text-xs font-medium leading-5 text-pink-500 grow shrink basis-auto max-md:max-w-full">
                {errors.password.message}
              </p>
            </div>
          )}

          {/*........................... CHECKBOX INPUT................................ */}
          <div className="flex items-start self-stretch justify-between gap-3 mt-6 max-md:max-w-full max-md:flex-wrap">
            {/* <input
                  style={{ borderColor: errors.checkbox ? "red" : "green" }}
                  type="checkbox"
                  className={`sm:p-2  sm:mr-[3rem] object-contain bg-red object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
                  placeholder="Password`}
                  {...register("checkbox", { required: true })}
                /> */}
            <div
              className={`custom-checkbox ${errors.checkbox ? "error" : ""}`}
            >
              <input
                type="checkbox"
                id="myCheckbox"
                {...register("checkbox", { required: true })}
              />
              <label htmlFor="myCheckbox"></label>
            </div>
            <p className="self-stretch block text-xs leading-5 text-slate-900 grow shrink basis-auto max-md:max-w-full">
              <span className=" text-slate-500">
                By creating an account means you agree to the{" "}
              </span>
              <span className="font-semibold text-slate-900">
                Terms & Conditions
              </span>
              <span className=" text-slate-500"> and our </span>
              <span className="font-semibold text-slate-900">
                Privacy Policy
              </span>
            </p>
          </div>

          {/* ERROR MESSAGE */}

          {errors.checkbox && (
            <div className="flex items-stretch self-stretch justify-between gap-2 mt-3 max-md:max-w-full max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/077c7c8d-06dc-44e1-abfd-7ac35c167494?apiKey=efca4811fd144921868a8a908fb73e83&"
                className="items-center justify-center object-contain object-center w-5 max-w-full overflow-hidden aspect-square shrink-0"
              />
              <p
                className={clsx`self-start text-xs font-medium leading-5 text-pink-500 grow shrink basis-auto max-md:max-w-full
                  `}
              >
                {errors.checkbox.message}
              </p>
            </div>
          )}
          {/* className={isSubmitted && !errors.username ? 'bg-green-500' : ''} */}
          <button
            onClick={() => trigger()}
            className={`items-center self-stretch justify-center px-5 py-4 mt-8 text-base font-bold leading-6 
                tracking-wide text-center text-white bg-blue-600 rounded-xl max-md:max-w-full`}
          >
            Sign Up
          </button>

          {/* other sign up options */}
          {/* <div className="flex justify-center items-center mt-[2rem] w-full">
                <span className="bg-slate-200 self-center w-[206px] shrink-0 h-px my-auto"></span>
                <p className="text-[#2563eb] text-xs Custom__Options">
                  Or sign up with
                </p>
                <span className="bg-slate-200 self-center w-[206px] shrink-0 h-px my-auto"></span>
              </div> */}
          <div className="flex justify-center items-center mt-[2rem] w-full">
            <span className="block h-[2px] w-[100px] border border-gray-200 text-gray-500"></span>
            <p className="text-[#2563eb] Custom__Options">Or sign up with</p>
            <span className="block h-[2px] w-[100px] border border-gray-200 text-gray-500"></span>
          </div>
          <div className="flex items-stretch self-stretch justify-between gap-4 mt-8 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <div className="justify-between items-center border border-[color:var(--greyscale-200,#E2E8F0)] bg-white flex gap-3 px-14 py-4 rounded-xl border-solid max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/73f447f7-1647-4a06-af0f-ddca016e9479?apiKey=efca4811fd144921868a8a908fb73e83&"
                className="object-contain object-center w-5 max-w-full my-auto overflow-hidden aspect-square shrink-0"
              />
              <div className="self-stretch text-base font-semibold leading-6 tracking-wide text-slate-900">
                Google
              </div>
            </div>
            <div className="justify-between items-center border border-[color:var(--greyscale-200,#E2E8F0)] bg-white flex gap-3 px-11 py-4 rounded-xl border-solid max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/48f79de4-6c8c-48b3-b0a6-34d72335a011?apiKey=efca4811fd144921868a8a908fb73e83&"
                className="object-contain object-center w-5 max-w-full my-auto overflow-hidden aspect-square shrink-0"
              />
              <div className="self-stretch text-base font-semibold leading-6 tracking-wide text-slate-900">
                Facebook
              </div>
            </div>
          </div>
          <div className="text-blue-600 text-center text-sm font-medium leading-6 tracking-wide max-w-[340px] self-center mt-10">
            <span className=" text-slate-900">Already have an account?</span>
            <span className="font-medium text-slate-900"> </span>
            <Link href="/auth/login">
              <span className="font-bold text-blue-600">Log In</span>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpRightSide;
