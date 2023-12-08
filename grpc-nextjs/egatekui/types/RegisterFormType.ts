
interface RegisterFormTypes {
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
    username: string;
    email: string;
    password: string;
    onSubmit: (data: any) => void;
  }


  type State = {
    formData: {
        username: string;
        email: string;
        password: string;
        checkbox: boolean;
    };
    setFormData: (data: any) => void;
}


type MyUpdatedComponentProps = {
  logoSrc: string;
  title: string;
  imageSrcSet: string;
};
