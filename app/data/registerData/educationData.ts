export type EducationFieldName =
  | "institutionName"
  | "degree"
  | "completedYear";
export type EducationData = {
  lable: string;
  placeholder: string;
  name: EducationFieldName;
  type: string;
};
export const educationInfoFields: EducationData[] = [
  {
    lable: "Institution Name",
    placeholder: "Harvard University",
    name: "institutionName",
    type: "text",
  },
  {
    lable: "Degree Completion Date",
    placeholder: "YYYY-MM-DD",
    name: "degree",
    type: "date",
  },
  {
    lable: "Completed Year",
    placeholder: "2022",
    name: "completedYear",
    type: "number",
  },
];