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
    type: "text"
  },
  {
    lable: "Nationality",
    placeholder: "American",
    name: "nationality",
    type: "text"
  },
  {
    lable: "City",
    placeholder: "New York",
    name: "address.city",
    type: "text"
  },
  {
    lable: "Street",
    placeholder: "123 Main St",
    name: "address.street",
    type: "text"
  },
  {
    lable: "Country",
    placeholder: "USA",
    name: "address.country",
    type: "text"
  },
  {
    lable: "Postal / ZIP Code",
    placeholder: "10001",
    name: "postalCode",
    type: "text"
  },
  {
    lable: "Profile Photo",
    placeholder: "Upload your photo",
    name: "profilePhoto",
    type: "file"
  }
];