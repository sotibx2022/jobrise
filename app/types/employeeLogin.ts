import { z } from "zod"
import { passwordSchema } from "../zodSchema/passwordSchema"
export const employeeEmailLogin = z.object({
    email: z.email(),
    password: passwordSchema,
})
export const employeePinLogin = z.object({
    pin: z.number(),
})
export const employeePhoneLogin = z.object({
    phone: z.number(),
    password: passwordSchema
})
export type employeeEmailLogin = z.infer<typeof employeeEmailLogin>
export type employeePinLogin = z.infer<typeof employeePinLogin>
export type employeePhoneLogin = z.infer<typeof employeePhoneLogin>