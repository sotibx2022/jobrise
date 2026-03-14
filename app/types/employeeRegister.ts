import { z } from 'zod';
import { passwordSchema } from '../zodSchema/passwordSchema';
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
  fullName: z.string().min(1, "Full Name is required"),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  gender: z.enum(["Male", "Female", "Other"], "Please select a valid  gender option"),
  nationality: z.string().min(1, "Nationality is required"),
  address: z.object({
    city: z.string().min(1, "City is required"),
    street: z.string().min(1, "Street is required"),
    country: z.string().min(1, "Country is required"),
  }),
  postalCode: z.string().min(1, "Postal Code is required"),
  profilePhoto: z.string(),
});
export const professionalInfo = z.array(z.object({
  jobTitle: z.string().min(1, "Job Title is required"),
  yearsOfExperience: z.number().min(0, "Years of Experience must be a positive number"),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  roles: z.array(z.string()).min(1, "At least one role is required"),
}))
export const educationInfo = z.array(z.object({
  institutionName: z.string().min(1, "Institution Name is required"),
  degree: z.string().min(1, "Degree is required"),
  completedYear: z.number().min(1900, "Completed Year must be a valid year").max(new Date().getFullYear(), "Completed Year cannot be in the future"),
}))
export const skillsInfo = z.object({
  skills: z.array(z.string().min(1, "At least one skill is required")),
  digitalSkills: z.array(z.string().optional()),
  languageSkills: z.array(z.string().min(1, "At least one language skill is required")),
})
export const additionalInfo = z.object({
  profileSummary: z.string().length(100, "minimum 100 characters"),
  portfolioLink: z.url("Please enter a valid URL").optional(),
})
export const registerInfo = z.object({
  accountDetails: employeeAccountInfo,
  personalDetails: employeePersonalInfo,
  experienceDetails: professionalInfo,
  educationDetails: educationInfo,
  skillsDetails: skillsInfo,
  additionalDetails: additionalInfo
})
export type accountDetails = z.infer<typeof employeeAccountInfo>
export type experienceDetails = z.infer<typeof professionalInfo>
export type educationDetails = z.infer<typeof educationInfo>
export type skillsDetails = z.infer<typeof skillsInfo>
export type personalDetails = z.infer<typeof employeePersonalInfo>
export type additionalDetails = z.infer<typeof additionalInfo>
export type registerDetails = z.infer<typeof registerInfo>
