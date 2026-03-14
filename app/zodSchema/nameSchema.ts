import { z } from "zod";
// Function to create a dynamic name/paragraph schema
export const createNameSchema = (
    minLength: number,
    maxLength: number,
    pattern: RegExp,
    fieldName: string
) => {
    return z
        .string()
        .min(minLength, `${fieldName} must be at least ${minLength} characters`)
        .max(maxLength, `${fieldName} must be at most ${maxLength} characters`)
        .regex(pattern, `${fieldName} contains invalid characters`);
};