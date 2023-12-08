// registrationStore.ts

import {create} from 'zustand';

interface PersonalInfo {
  firstName: string;
  lastName: string;
  password: string;
  number: string;
  personalBusinessGroupValue: number;




  // Add other personal info fields as needed
}

interface BusinessInfo {
  companyName: string;
  // Add other business info fields as needed
}

interface RegistrationState {
  email: string;
  otp: string;
  personalInfo: PersonalInfo;
  businessInfo: BusinessInfo;
  pin: string;
  setEmail: (email: string) => void;
  setOtp: (otp: string) => void;
  setPersonalInfo: (info: Partial<PersonalInfo>) => void;
  setBusinessInfo: (info: Partial<BusinessInfo>) => void;
  setPin: (pin: string) => void;
  reset: () => void;
}

const useRegistrationStore = create<RegistrationState>((set) => ({
  // Step 1: Email
  email: '',
  setEmail: (email) => set({ email }),

  // Step 2: OTP
  otp: '',
  setOtp: (otp) => set({ otp }),

  // Step 3: Personal Information
  personalInfo: {
    firstName: '',
    lastName: '',
    password: '',
    number: '',
    personalBusinessGroupValue: 2
  },
  setPersonalInfo: (info) => set((state) => ({ personalInfo: { ...state.personalInfo, ...info } })),

  // Step 4: Business Information
  businessInfo: {
    companyName: '',
  },
  setBusinessInfo: (info) => set((state) => ({ businessInfo: { ...state.businessInfo, ...info } })),

  // Step 5: Six Digit PIN
  pin: '',
  setPin: (pin) => set({ pin }),

  // Function to reset the state
  reset: () =>
    set({
      email: '',
      otp: '',
      personalInfo: {
        firstName: '',
        lastName: '',
        password:'',
        number: '',
        personalBusinessGroupValue: 2
      },
      businessInfo: {
        companyName: '',
      },
      pin: '',
    }),
}));

export default useRegistrationStore;
