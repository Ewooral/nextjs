interface LoginState {
    isLoading: boolean;
    isEmpty: boolean;
    togglePassword: boolean;
    inputType: string;
    isRendered: boolean;
    passwordTouched: boolean;
    username: string;
    email: string;
    password: string;
    errors: any;
    isSubmitting: boolean;
  }
  
  interface LoginStoreActions {
    setLoginState: (state: Partial<LoginState>) => void;
    handlePasswordToggleClick: () => void;
    onSubmit: () => void;
  }
  
  type LoginStore = LoginState & LoginStoreActions;
  
  const createLoginSlice = (set: { (partial: unknown, replace?: boolean | undefined): void; (arg0: { (prev: any): any; (state: any): { togglePassword: boolean; inputType: string; }; }): any; }) => ({
    isLoading: false,
    isEmpty: false,
    togglePassword: false,
    inputType: 'password',
    isRendered: false,
    passwordTouched: false,
    username: '',
    email: '',
    password: '',
    errors: {},
    isSubmitting: false,
    setLoginState: (state: any) =>
    // @ts-ignore
      set((prev: any) => ({ ...prev, ...state }), 'setLoginState'),
    handlePasswordToggleClick: () =>
      set((state: { togglePassword: any; inputType: string; }) => ({
        togglePassword: !state.togglePassword,
        inputType: state.inputType === 'password' ? 'text' : 'password',
      })),
    onSubmit: async () => {
      // Implement your submission logic here
    },
  });
  
  export type { LoginStore };
  export default createLoginSlice;