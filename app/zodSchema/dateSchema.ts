import { z } from "zod";
export const createDateValidation = (fieldName: string, dob?: boolean) => {
  return z
    .string()
    .min(1, `${fieldName} is required`)
    .refine(
      (val) => /^\d{4}-\d{2}-\d{2}$/.test(val),
      `${fieldName} must be in YYYY-MM-DD format`
    )
    .refine(
      (val) => {
        const date = new Date(val);
        const today = new Date();
        return date <= today;
      },
      `${fieldName} cannot be in the future`
    )
    // Only validate age if dob is true
    .refine(
      (val) => {
        if (!dob) return true; // skip age validation if dob is false
        const birthDate = new Date(val);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age -= 1;
        }
        return age >= 18;
      },
      "You must be at least 18 years old"
    );
};