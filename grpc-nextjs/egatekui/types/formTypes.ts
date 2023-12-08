// types.ts
export interface FormData {
    // Define your form data fields
    email?: string;
    password?: string;
    username?: string;
    country?: string;


  }
  
  export interface FormState {
    step: number;
    formData: FormData;
  }
  
  export interface FormActions {
    setStep: (step: number) => void;
    setFormData: (data: Partial<FormData>) => void;
  }