import clsx from "clsx";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { PatternFormat } from 'react-number-format';
import { personalInfoSchema } from "@/types/BasicUserSchema";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

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
        BUSINESS DETAILS PAGE
      </h1>
      <p className="text-xs text-center text-[#888787]">
        Please enter your business details below{" "}
      </p>
     <form onSubmit={handleSubmit(onSubmit)}>
      {/* ........................ BUSINESS NAME INPUT...................................... */}
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
          placeholder="businessName"
          {...register("businessName", { required: true })}
        />
      </div>

      {/* ........................ BUSINESS COUNTRY CODE INPUT...................................... */}
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
          placeholder="countryCodeForFirstEganowWallet"
          {...register("countryCodeForFirstEganowWallet", { required: true })}
        />
      </div>
      
      {/* ........................BUSINESS MOBILE INPUT...................................... */}
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

     

     
      </form>
    </div>
  );
};
export default PersonalInformationStep;
