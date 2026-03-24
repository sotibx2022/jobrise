export type PersonalFieldName =
  | "fullName"
  | "dateOfBirth"
  | "gender"
  | "nationality"
  | "address.city"
  | "address.street"
  | "address.country"
  | "postalCode"
  | "profilePhoto";
export type PersonalData = {
  lable: string;
  placeholder: string;
  name: PersonalFieldName;
  type: string;
  options?:string[]
};
export const personalData: PersonalData[] = [
  {
    lable: "Full Name",
    placeholder: "John Doe",
    name: "fullName",
    type: "text"
  },
  {
    lable: "Date of Birth",
    placeholder: "YYYY-MM-DD",
    name: "dateOfBirth",
    type: "date"
  },
  {
    lable: "Gender",
    placeholder: "Male / Female / Other",
    name: "gender",
    type: "radio",
    options:['Male','Female','Other']
  },
  {
    lable: "City",
    placeholder: "Kathmandu",
    name: "address.city",
    type: "text"
  },
  {
    lable: "Street",
    placeholder: "MaijuBahal, Chabahil",
    name: "address.street",
    type: "text"
  },
  {
    lable: "Postal / ZIP Code",
    placeholder: "10001",
    name: "postalCode",
    type: "text"
  },
];