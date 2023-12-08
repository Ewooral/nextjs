// components/Stepper.js
import Link from 'next/link';
import { useStep } from '@/store/centralizedStore';

const Stepper = () => {
  const { step, setStep } = useStep();
  const steps = ['/auth/register', '/auth/login', '/auth/forgotpassword',  '/auth/verifyotp', '/auth/resetpassword'];

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
    <div>
      {step > 0 && (
        <Link href={steps[step - 1]}>
          <button onClick={handlePrevious}>Previous</button>
        </Link>
      )}
      {step < steps.length - 1 && (
        <Link href={steps[step + 1]}>
          <button onClick={handleNext}>Next</button>
        </Link>
      )}
    </div>
  );
};

export default Stepper;