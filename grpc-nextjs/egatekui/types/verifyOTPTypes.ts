interface verifyOTPType {
    isLoading?: boolean;
    isRendered?: boolean;
    register: any;
    control?: any;
    handleSubmit?: any;
    trigger?: any;
    watch?: any;
    errors?: any;
    isSubmitting?: boolean;
    otp?: string;
    onSubmit?: (data: any) => void;
    isSuccessful?: boolean;
    message?: string
  }