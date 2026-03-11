import { z } from "zod"
import { passwordSchema } from "../zodSchema/passwordSchema"
// Email login schema
export const employeeEmailLogin = z.object({
  email: z
    .string()
    .email("Please enter a valid email address"),
  password: passwordSchema, // reuse your existing password schema
})
// Pin login schema
export const employeePinLogin = z.object({
  pin: z
    .string()
    .length(4, "Pin must be exactly 4 digits")
    .regex(/^\d+$/, "Pin must contain only digits"),
})
// Phone login schema
export const employeePhoneLogin = z.object({
  phone: z
    .string()
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  password: passwordSchema,
})
// TypeScript types inferred from schemas
export type employeeEmailLogin = z.infer<typeof employeeEmailLogin>
export type employeePinLogin = z.infer<typeof employeePinLogin>
export type employeePhoneLogin = z.infer<typeof employeePhoneLogin>