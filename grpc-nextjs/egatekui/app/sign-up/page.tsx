import React from "react";
import Image from "next/image";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const page = () => {
  return (
    <section className="grid grid-cols-2 text-center">
      {/* SIGN UP SECTION - LEFT*/}
      <article className=" md:bg-[url(/Cover.svg)] md:bg-cover changeGame">
        <div className="flex md:flex-col justify-center items-center h-screen">
          <div className="flex flex-col justify-center items-center text-4xl font-bold text-white">
            <Image
              src={"/Illustration.svg"}
              alt="IMG"
              width={343}
              height={409}
              className="hidden md:block"
            />
          </div>
          <div className="text-white">Sign in to continue</div>
        </div>
      </article>

      {/* SIGN UP SECTION - RIGHT */}
      <article className="flex flex-col h-screen md:p-[2rem] lg:p-[5rem] xl:p-[7rem] bg-gray ml-[100%] w-full">
        <h1 className="text-4xl font-bold text-black">
          Sign Up For An Account
        </h1>
        <form action="">
          {/* Username */}
        <div className="flex  items-center border border-gray-200 m-4 px-[1rem] py-[.4rem] rounded-2xl">
          <PermIdentityIcon className="text-gray-500" />
          <input
            type="text"
            className="border-2 border-none outline-none p-2 w-full"
            placeholder="Username"
          />
        </div>

        {/* Email */}
        <div className="flex  items-center border border-gray-200 m-4 px-[1rem] py-[.4rem] rounded-2xl">
          <MailOutlinedIcon className="text-gray-500" />
          <input
            type="text"
            className="border-2 border-none outline-none p-2 w-full"
            placeholder="Email"
          />
        </div>

        {/* Password */}
        <div className="flex  items-center border border-gray-200 m-4 px-[1rem] py-[.4rem] rounded-2xl">
          <LockOutlinedIcon className="text-gray-500" />
          <input
            type="password"
            className="border-2 border-none outline-none p-2 w-full"
            placeholder="Password"
          />
        </div>

        


        </form>
      </article>
    </section>
  );
};

export default page;
