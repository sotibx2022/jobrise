import { z } from 'zod';
import { passwordSchema } from '../zodSchema/passwordSchema';
import { createNameSchema } from '../zodSchema/nameSchema';
import { createDateValidation } from '../zodSchema/dateSchema';
export const employeeAccountInfo = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    phoneNumber: z
      .string()
      .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    pin: z
      .string()
      .length(4, "Pin must be exactly 4 digits")
      .regex(/^\d+$/, "Pin must contain only digits"),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
export const employeePersonalInfo = z.object({
  fullName: createNameSchema(2, 100, /^[A-Za-z ]+$/, "Full Name"),
  dateOfBirth: createDateValidation("Date of Birth", true),
  gender: z.enum(["Male", "Female", "Other"], "Please select a valid gender option"),
  nationality: z.string().min(1, "Nationality is required"),
  address: z.object({
    city: createNameSchema(2, 50, /^[A-Za-z ]+$/, "City"),
    street: z.string().min(1, "Street is required"),
    country: z.string().min(1, "Country is required"),
  }),
  postalCode: z.string().min(1, "Postal Code is required"),
  profilePhoto: z.string(),
});
export const professionalInfo = z.array(
  z.object({
    jobTitle: createNameSchema(2, 50, /^[A-Za-z ]+$/, "Job Title"),
    yearsOfExperience: z.number().min(0, "Years of Experience must be a positive number"),
    skills: z.array(createNameSchema(2, 50, /^[A-Za-z ]+$/, "Skill")),
    roles: z.array(createNameSchema(2, 50, /^[A-Za-z ]+$/, "Role")),
  })
);
export const educationInfo = z.array(
  z.object({
    institutionName: createNameSchema(2, 100, /^[A-Za-z0-9 .,&-]+$/, "Institution Name"),
    degree: createDateValidation("Degree Completion Date"),
    completedYear: z
      .number()
      .min(1900, "Completed Year must be a valid year")
      .max(new Date().getFullYear(), "Completed Year cannot be in the future"),
  })
);
export const skillsInfo = z.object({
  skills: z.array(createNameSchema(2, 50, /^[A-Za-z ]+$/, "Skill")),
  digitalSkills: z.array(z.string().optional()),
  languageSkills: z.array(createNameSchema(2, 50, /^[A-Za-z ]+$/, "Language Skill")),
});
export const additionalInfo = z.object({
  profileSummary: createNameSchema(10, 500, /^[A-Za-z0-9 ,.!?]+$/, "Profile Summary"),
  portfolioLink: z.url("Please enter a valid URL").optional(),
});
export const registerInfo = z.object({
  accountDetails: employeeAccountInfo,
  personalDetails: employeePersonalInfo,
  experienceDetails: professionalInfo,
  educationDetails: educationInfo,
  skillsDetails: skillsInfo,
  additionalDetails: additionalInfo,
});
export type accountDetails = z.infer<typeof employeeAccountInfo>;
export type experienceDetails = z.infer<typeof professionalInfo>;
export type educationDetails = z.infer<typeof educationInfo>;
export type skillsDetails = z.infer<typeof skillsInfo>;
export type personalDetails = z.infer<typeof employeePersonalInfo>;
export type additionalDetails = z.infer<typeof additionalInfo>;
export type registerDetails = z.infer<typeof registerInfo>;