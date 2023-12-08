
interface ResetPasswordTypes {
    handleInputChange?: (e: any) => void;
    setPasswordTouched?: (argo: boolean) => void;
    isLoading?: boolean;
    isEmpty?: boolean;
    togglePassword: boolean;
    inputType: string;
    isRendered?: boolean;
    passwordTouched?: boolean;
    register: any;
    control?: any;
    handleSubmit?: any;
    trigger?: any;
    watch?: any;
    errors?: any;
    isSubmitting?: boolean;
    handlePasswordToggleClick: () => void;
    password: string;
    confirmPassword: string;
    onSubmit: (data: any) => void;
    isSuccessful?: boolean;
    handleButtonClick?: () => void;
      }