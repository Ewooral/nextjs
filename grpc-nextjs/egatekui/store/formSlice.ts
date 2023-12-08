// // formSlice.ts
// import { create } from 'zustand';
// import { FormState, FormActions } from '@/types/formTypes';

// const createFormSlice = (set: ((arg0: { step?: any; formData?: any; }) => any) | undefined) => ({
//   step: 1,
//   setStep: (step: any) => set && set({ step }),
//   formData: {
//     email: '',
//     password: '',
//     username: '',
//     country: '',
//   },
//   setFormData: (data: any) => set && set({ formData: { ...data } }),
// });

// export default createFormSlice;

// formSlice.ts
import { create } from 'zustand';

// Define the state and actions for each slice
const createRegisterSlice = (set: { (partial: unknown, replace?: boolean | undefined): void; (arg0: (state: any) => { registerData: any; }): any; }) => ({
  registerData: {
    email: '',
    password: '',
    username: '',
  },
  setRegisterData: (data: any) => set((state: { registerData: any; }) => ({ registerData: { ...state.registerData, ...data } })),
});

const createLoginSlice = (set: { (partial: unknown, replace?: boolean | undefined): void; (arg0: (state: any) => { loginData: any; }): any; }) => ({
  loginData: {
    email: '',
    password: '',
  },
  setLoginData: (data: any) => set((state: { loginData: any; }) => ({ loginData: { ...state.loginData, ...data } })),
});

const createResetPasswordSlice = (set: { (partial: unknown, replace?: boolean | undefined): void; (arg0: (state: any) => { resetPasswordData: any; }): any; }) => ({
  resetPasswordData: {
    email: '',
    otp: '',
    newPassword: '',
  },
  setResetPasswordData: (data: any) => set((state: { resetPasswordData: any; }) => ({ resetPasswordData: { ...state.resetPasswordData, ...data } })),
});

// Combine the slices into a single store
const useStore = create((set) => ({
  step: 1,
  setStep: (step: any) => set({ step }),
  ...createRegisterSlice(set),
  ...createLoginSlice(set),
  ...createResetPasswordSlice(set),
}));

export default useStore;