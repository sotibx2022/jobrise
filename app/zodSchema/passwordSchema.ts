import { z } from 'zod'
export const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
        "Password must include uppercase, lowercase, number, and special character"
    )