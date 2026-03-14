import { z } from "zod"
import { passwordSchema } from "../zodSchema/passwordSchema"
import { createNumberSchema } from "../zodSchema/numberSchema"
// Email login schema
export const employeeEmailLogin = z.object({
    email: z
        .string()
        .email("Please enter a valid email address"),
    password: passwordSchema, // reuse your existing password schema
})
// Pin login schema
export const employeePinLogin = z.object({
    pin: createNumberSchema("Pin", 4), // using the number schema for a 4-digit pin
})
// Phone login schema
export const employeePhoneLogin = z.object({
    phone: createNumberSchema("Phone", 10), // using the number schema for a 10-digit phone number
    password: passwordSchema,
})
// TypeScript types inferred from schemas
export type employeeEmailLogin = z.infer<typeof employeeEmailLogin>
export type employeePinLogin = z.infer<typeof employeePinLogin>
export type employeePhoneLogin = z.infer<typeof employeePhoneLogin>