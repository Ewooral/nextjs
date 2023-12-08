import clsx from "clsx";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { PatternFormat } from 'react-number-format';
import { personalInfoSchema } from "@/types/BasicUserSchema";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import useStepperStore from "@/store/stepperStore";
import { useEffect } from "react";

type PersonalInfoType = z.infer<typeof personalInfoSchema>;


const PersonalInformationStep = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } =  useForm<PersonalInfoType>({
    resolver: zodResolver(personalInfoSchema),
    mode: "onChange", // validate the form on each input's change event
  });

  const [email, password, firstName, lastName, number, personalBGV ] = watch([
    "email",
    "password",
    "firstName",
    "lastName",
    "number",
    "personalBGV"
    
  ]);

  const onSubmit = (data: PersonalInfoType) => {
    const result = personalInfoSchema.safeParse(data);
    if (result.success) {
      console.log("Personal Information: ", data);
    } else {
      console.log(result.error);
    }
  }

  

  return (
    <div className="p-5">
       <h1 className="font-extrabold text-[30px] text-center">
        PERSONAL DETAILS PAGE
      </h1>
      <p className="text-xs text-center text-[#888787]">
        Please enter your personal details below{" "}
      </p>
     <form onSubmit={handleSubmit(onSubmit)}>
      {/* ........................ FIRSTNAME INPUT...................................... */}
      <div
        className={`items-stretch self-stretch border border-[color:var(--greyscale-200,#E2E8F0)] flex gap-3 mt-8 pl-4 pr-2 py-4 
              rounded-xl border-solid max-md:max-w-full flex-unwrap max-md:pr-5,
             
                
              `}
      >
        <PersonAddAltOutlinedIcon className="items-center justify-center object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
 />
        <input
          type="text"
          className="px-2 py-1 ml-2 outline-none w-[79%] sm:w-[90%] md:w-full"
          placeholder="firstName"
          {...register("firstName", { required: true })}
        />
      </div>

      {/* ........................ LASTNAME INPUT...................................... */}
      <div
        className={`items-stretch self-stretch border border-[color:var(--greyscale-200,#E2E8F0)] flex gap-3 mt-8 pl-4 pr-2 py-4 
              rounded-xl border-solid max-md:max-w-full flex-unwrap max-md:pr-5,
              
                
              `}
      >
        
         <PersonAddAltOutlinedIcon className="items-center justify-center object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
 />
        <input
          type="lastName"
          className="px-2 py-1 ml-2 outline-none w-[79%] sm:w-[90%] md:w-full"
          placeholder="lastName"
          {...register("lastName", { required: true })}
        />
      </div>
      
      {/* ........................ MOBILE INPUT...................................... */}
      <div
        className={`items-stretch self-stretch border border-[color:var(--greyscale-200,#E2E8F0)] flex gap-3 mt-8 pl-4 pr-2 py-4 
              rounded-xl border-solid max-md:max-w-full flex-unwrap max-md:pr-5,
             
                
              `}
      >
        <PhoneInTalkOutlinedIcon className="items-center justify-center object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
  />
        <PatternFormat 
          format="233 (###) ###-####"
          mask="_"
          type="tel"
          className="px-2 py-1 ml-2 outline-none w-[79%] sm:w-[90%] md:w-full"
          placeholder="Mobile Number"
          {...register("number", { required: true })}
        />
      </div>

      {/* ........................ EMAIL INPUT...................................... */}
      <div
        className={`items-stretch self-stretch border border-[color:var(--greyscale-200,#E2E8F0)] flex gap-3 mt-8 pl-4 pr-2 py-4 
              rounded-xl border-solid max-md:max-w-full flex-unwrap max-md:pr-5,
              `}
      >
        <AttachEmailOutlinedIcon className="items-center justify-center object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
  />
        <input
          type="email"
          className="px-2 py-1 ml-2 outline-none w-[79%] sm:w-[90%] md:w-full"
          placeholder="Email"
          {...register("email", { required: true })}
        />
      </div>

      

      {/* ........................ PASSWORD...................................... */}
      <div
        className={`items-stretch self-stretch border border-[color:var(--greyscale-200,#E2E8F0)] flex gap-3 mt-8 pl-4 pr-2 py-4 
              rounded-xl border-solid max-md:max-w-full flex-unwrap max-md:pr-5,
              
                
              `}
      >
        <HttpsOutlinedIcon className="items-center justify-center object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
  />
        <input
          type="password"
          className="px-2 py-1 ml-2 outline-none w-[79%] sm:w-[90%] md:w-full"
          placeholder="password"
          {...register("password", { required: true })}
        />
      </div>

      {/* ........................ PERSONAL BUSINESS GROUP VALUE INPUT...................................... */}
      <div
        className={`items-stretch self-stretch border border-[color:var(--greyscale-200,#E2E8F0)] flex gap-3 mt-8 pl-4 pr-2 py-4 
              rounded-xl border-solid max-md:max-w-full flex-unwrap max-md:pr-5,
             
                
              `}
      >
        <GroupsOutlinedIcon className="items-center justify-center object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
  />
        
        <input
          type="number"
          className="px-2 py-1 ml-2 outline-none w-[79%] sm:w-[90%] md:w-full"
          placeholder="personal Business Group Value"
          {...register("personalBGV", { required: true })}
        />
      </div>

      </form>
    </div>
  );
};
export default PersonalInformationStep;
