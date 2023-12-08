import { z } from "zod";

export const BasicUserSchema = z.object({
    username: z
      .string()
      .trim()
      .min(2, { message: "Name must be at least 2 characters long" }),
    email: z.string().email().trim().toLowerCase(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .refine(password => (
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password)
      ), 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
      .refine(password => (
        /[!@#$%^&*(),.?":{}|<>]/.test(password)
      ), 'Password must contain at least one special character')
      .refine(password => (
        !/\s/.test(password)
      ), 'Password cannot contain whitespace'),
    checkbox: z.boolean().refine((val) => val),
  });

  export const  BasicUserLoginSchema = z.object({
    email: z.string().email().trim().toLowerCase(),
    password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .refine(password => (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password)
    ), 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
    .refine(password => (
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    ), 'Password must contain at least one special character')
    .refine(password => (
      !/\s/.test(password)
    ), 'Password cannot contain whitespace'),
    checkbox: z.boolean().refine((val) => val),
  });

  export const BasicUserForgotPasswordSchema = z.object({
    email: z.string().email().trim().toLowerCase(),
  });

export const BaicUserVerifyOTPSchema = z.object({
  otp: z.string().refine(otp => otp.length === 6),
});

export const BasicUserResetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .refine(password => (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password)
    ), 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
    .refine(password => (
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    ), 'Password must contain at least one special character')
    .refine(password => (
      !/\s/.test(password)
    ), 'Password cannot contain whitespace'),
  confirmPassword: z.string().refine((val) => val),
});


export const personalInfoSchema = z.object({
  number: z.string(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z
  .string()
  .min(8, 'Password must be at least 8 characters long')
  .refine(password => (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password)
  ), 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
  .refine(password => (
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
  ), 'Password must contain at least one special character')
  .refine(password => (
    !/\s/.test(password)
  ), 'Password cannot contain whitespace'),
  personalBGV: z.number(),
  businessName: z.string(),
  countryCode: z.string(),
  mobileOrWeb: z.string(),
  languageId: z.string(),
  customerSixDigitPIN: z.string()
  .length(6, "Enter six digit pin please")
  .min(6, 'Pin must be exactly 6 characters long')
  ,
  countryCodeForFirstEganowWallet: z.string()
 .optional(),
});