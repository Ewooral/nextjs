import {create} from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { objSteps } from "@/app/lib/objSteps";
import { OTPResponse } from '@/proto/generated/bank_pb';

type setPersonalInfo = {
  number: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  personalBusinessGroupValue: number;
  businessName: string;
  countryCode: string;
  mobileOrWeb: string;
  languageId: string;
  customerSixDigitPIN: string;
  countryCodeForFirstEganowWallet: string;
  otp: string;
  businessContactPersonMobileNumber: string;
  mobileNoDialCode: string;
  securityQuestionOne: string;
  securityAnswerOne: string;
  securityQuestionTwo: string;
  securityAnswerTwo: string;



}

type StepperStore = {
    personalInfo: personalInfoType;
    workInfo: any;
    previousStep: number | null;
    currentStep: number;
    lastValidatedStep: number;
    sendOtpResponse: {
      issuccess: boolean;
      message: string;
      messagesuccessfulorfailed: string;
      registrationerrorcode: string;

    },
    verifyOtpResponse: {
      issuccess: boolean;
      message: string;
      messagesuccessfulorfailed: string;
      registrationerrorcode: string;
    },
    emailResponse: {
      issuccess: boolean;
      message: string;
      messagesuccessfulorfailed: string;
      registrationerrorcode: string;
    },
    setCurrentStep: (step: number) => void;
    setEmail: (email: string) => void;
    setOTPCode: (code: string) => void;
    setPersonalInfo: (info: any) => void;
    setWorkInfo: (info: any) => void;
    setSendOtpResponse: ( otpResponse: any) => void;
    setVerifyOtpResponse: (verifyOTPType: any) => void;
    setLastValidatedStep: (step: number) => void;
    setEmailResponse: (emailResponse: any) => void;
    };



//@ts-ignore
const useStepperStore = create<StepperStore>(devtools(persist(set => ({
    personalInfo: {
      number: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      personalBGV: 2,
      businessName: '',
      countryCode: '',
      mobileOrWeb: 'WEB',
      languageId: '',
      customerSixDigitPIN: '',
      countryCodeForFirstEganowWallet: '',
      otp: '',
      businessContactPMN: '',
      mobileNoDialCode: '',
      securityQuestionOne: '',
      securityAnswerOne: '',
      securityQuestionTwo: '',
      securityAnswerTwo: '',
    },
    workInfo: {},
    previousStep: null,
    currentStep: 0,
    lastValidatedStep: objSteps.length - 1,
    setCurrentStep: (step) => {
        if (step >= 0 && step < objSteps.length) {
          set(state => ({ previousStep: state.currentStep, currentStep: step }), false, 'setCurrentStep');
        }  
      },
    setLastValidatedStep: (step: number) => {
        if (step >= 0 && step < objSteps.length) {
          set({ lastValidatedStep: step });
        }
      },
    setEmail: email =>  set(state => ({ ...state, personalInfo: { ...state.personalInfo, email } }), false, 'setEmail'),
    setOTPCode: otp => set(state => ({ ...state, personalInfo: { ...state.personalInfo, otp } }), false, 'setOTPCode'),
    setPersonalInfo: info => set({ personalInfo: info }),
    setWorkInfo: info => set({ workInfo: info }),
    setSendOtpResponse: (myOtp: any) => set({sendOtpResponse: myOtp}, false, 'setSendOtpResponse'),
    setVerifyOtpResponse: verifyInfo => set({verifyOtpResponse: verifyInfo}, false, 'setVerifyOtpResponse'),
    setEmaiResponse: (emailInfo: any) => set({emailResponse: emailInfo}, false, 'setEmailResponse') 

 }), { name: 'Stepper' } 
 )))

export default  useStepperStore;
