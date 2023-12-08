declare module 'react-input-mask' {
    import { ComponentType, InputHTMLAttributes } from 'react';
  
    interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
      mask: string;
      maskChar: string | null;
      alwaysShowMask?: boolean;
      formatChars?: Record<string, string>;
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
      beforeMaskedValueChange?: (
        newState: any,
        oldState: any,
        userInput: any,
        options: any
      ) => any;
    }
  
    const InputMask: ComponentType<InputMaskProps>;
  
    export default InputMask;
  }