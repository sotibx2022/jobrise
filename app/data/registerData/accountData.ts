export type AccountFieldName =
  | "email"
  | "password"
  | "confirmPassword"
  | "phoneNumber"
  | "pin";
export type AccountData = {
  lable: string;
  placeholder: string;
  name: AccountFieldName;
  type: string;
};
export const accountInfo:AccountData[] = [{
    lable: "Email",
    placeholder: "johnmagtag12@gmail.com",
    name: "email",
    type: "text"
}, {
    lable: "Password",
    placeholder: "ktxbG@34rfd",
    name: "password",
    type: "text"
}, {
    lable: "Confirm Password",
    placeholder: "",
    name: "confirmPassword",
    type: "text"
},
{
    lable: "Phone Number",
    placeholder: "986465230",
    name: "phoneNumber",
    type: "text",
},
{
    lable: "Pin Number",
    placeholder: "4628",
    name: "pin",
    type: "text"
}]