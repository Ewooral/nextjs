import Carousel from "@/app/components/Carousel";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, {useEffect, useState} from "react";
import { z } from "zod";

const SignUpForm = (props: any) => {
    const [zodData, setZodData] = useState({})
    const {register, handleSubmit, formState: {errors, isSubmitting},} = props.useform()
    return (
        <>
        {/* SIGN UP SECTION - LEFT*/}
        <article className=" md:bg-[url(/Cover.svg)] md:bg-cover md:bg-center  changeGame w-full h-screen">
            <div className="flex items-center justify-center h-screen md:flex-col">
                <div className="flex-col items-center justify-center hidden text-4xl font-bold text-white md:flex">
                    <Carousel/>
                </div>
            </div>
        </article>

        {/* SIGN UP SECTION - RIGHT */}
        <article
            className="flex flex-col h-screen md:p-[2rem] lg:p-[5rem] xl:p-[10rem] 2xl:px-[16rem] bg-gray md:ml-[100%] lg:justify-center w-full">
            <h1 className="text-4xl font-bold text-black ">
                Sign Up For An Account
            </h1>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                {/* Username */}
                <div className="flex  items-center border border-gray-200 m-4 px-[1rem] py-[.4rem] rounded-2xl">
                    <PermIdentityIcon className="text-gray-500"/>
                    <input
                        type="text"
                        className="w-full p-2 border-2 border-none outline-none"
                        placeholder="Username"
                        {...register('username', {required: true})}
                    />
                </div>

                {/* Email */}
                <div className="flex  items-center border border-gray-200 m-4 px-[1rem] py-[.4rem] rounded-2xl">
                    <MailOutlinedIcon className="text-gray-500"/>
                    <input
                        type="email"
                        className="w-full p-2 border-2 border-none outline-none"
                        placeholder="Email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Entered value does not match email format',
                            },
                        })}
                    />
                </div>

                {/* Password */}
                <div className="flex  items-center border border-gray-200 m-4 px-[1rem] py-[.4rem] rounded-2xl">
                    <LockOutlinedIcon className="text-gray-500"/>
                    <input
                        type="password"
                        className="w-full p-2 border-2 border-none outline-none"
                        placeholder="Password"
                        {...register('password', {required: true})}
                    />
                </div>

                {/* Handle errors*/}




        {/* checkbox */}
        <div className="flex  items-center  m-4 px-[1rem] py-[2rem]">
            <input
                type="checkbox"
                className="sm:p-2  sm:mr-[3rem]"
                placeholder="Password"
                {...register('checkbox', {required: true})}
            />
            <p className="text-gray-500 mt-[3rem] xl:mb-[3rem]">
                By creating an account means you agree
                to our <span className="font-black text-black">Terms & Conditions</span> and our
                <span className="font-black text-black"> Privacy Policy</span>
            </p>

        </div>

        {/* Button */}
        <div className="flex items-center justify-center">
            <button className="bg-[#2563eb] text-white p-2 rounded-2xl w-[20rem] h-[3rem] 2xl:w-[92%]">
                Sign Up
            </button>
        </div>

        {/* other sign up options */}
        <div className="flex justify-center items-center mt-[2rem] w-full">
            <span className="block h-[2px] w-[100px] border border-gray-200 text-gray-500"></span>
            <p className="text-[#2563eb] Custom__Options">Or sign up with</p>
            <span className="block h-[2px] w-[100px] border border-gray-200 text-gray-500"></span>

        </div>

        <div className="flex justify-center items-center mt-[2rem]">
            <p className="text-gray-500">Already have an account?</p>
            {' '}<a href="#" className="text-[#2563eb] mx-[.7rem] ">Sign In</a>
        </div>


        </form>
</article>


</>
)
}

export default SignUpForm