import { useData } from '@/store/centralizedStore';
import { personalInfoSchema } from '@/types/BasicUserSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
type PersonalInfoType = z.infer<typeof personalInfoSchema>;


const ResetPasswordStep = () => {
  const [isRendered, setIsRendered] = useState(false);


  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } =  useForm<PersonalInfoType>({
    resolver: zodResolver(personalInfoSchema),
    mode: "onChange", // validate the form on each input's change event
  });  

  const sixDigitPin = watch('customerSixDigitPIN')
  
  useEffect(() => {
    if (!errors.customerSixDigitPIN && !isSubmitting) {
      setIsRendered(true);
    }
  }, [errors.customerSixDigitPIN, isSubmitting, sixDigitPin]);

  return (
    <div className='p-5'>
       <h1 className="font-extrabold text-[30px] text-center">
        SIX DIGIT PIN
      </h1>
      <p className="text-xs text-center text-[#888787]">
        Please enter your six digit pin below{" "}
      </p>
      <form>
      {/* ........................ CUSTOMER SIX DIGIT PIN...................................... */}
      <div
        className={`items-stretch self-stretch border border-[color:var(--greyscale-200,#E2E8F0)] flex gap-3 mt-8 pl-4 pr-2 py-4 
              rounded-xl border-solid max-md:max-w-full flex-unwrap max-md:pr-5,             
              
              ${
                errors.customerSixDigitPIN
                  ? "border-pink-500"
                  : sixDigitPin != "" && !errors.customerSixDigitPIN && isRendered
                  ? "border-green-500"
                  : "border-[gray] "
              }
              `}
      >
        <PasswordOutlinedIcon className="items-center justify-center object-contain object-center w-6 max-w-full overflow-hidden aspect-square shrink-0"
  />
        
        <input
          type="password"
          className="px-2 py-1 ml-2 outline-none w-[79%] sm:w-[90%] md:w-full"
          placeholder="Customer Six Digit PIN"
          {...register("customerSixDigitPIN", { required: true })}
        />
      </div>
      </form>
      
    </div>
  );
};

export default ResetPasswordStep;