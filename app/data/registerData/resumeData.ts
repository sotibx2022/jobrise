export type ProfessionalFieldName =
  | "employerName"
  | "jobTitle"
  | "yearsOfExperience"
  | "roles";
export type ProfessionalData = {
  lable: string;
  placeholder: string;
  name: ProfessionalFieldName;
  type: string;
};
export const professionalInfoFields: ProfessionalData[] = [
  {
    lable: "Employer Name",
    placeholder: "Google",
    name: "employerName",
    type: "text",
  },
  {
    lable: "Job Title",
    placeholder: "Software Engineer",
    name: "jobTitle",
    type: "text",
  },
  {
    lable: "Years Of Experience",
    placeholder: "5",
    name: "yearsOfExperience",
    type: "number",
  },
  {
    lable: "Roles / Responsibilities",
    placeholder: "Backend Development, API Design",
    name: "roles",
    type: "textarea",
  },
];