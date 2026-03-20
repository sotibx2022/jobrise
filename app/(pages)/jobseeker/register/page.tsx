"use client"
import {
  AccountInformation,
  PersonalInformation,
  JobPreference,
  ResumeInformation,
  EducationalDetails,
  Skills,
  AdditionalDetails,
  PreviewDetails
} from "./components"
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerDetails, registerInfo } from "@/app/types/employeeRegister"
import { useState } from "react"
import FormMessage from "@/app/components/form/FormMessage"
import ResponsiveButton from "@/app/components/buttons/ResponsiveButton"
const stepFields = [
  // 1. AccountInformation
  [
    "accountDetails.email",
    "accountDetails.phoneNumber",
    "accountDetails.pin",
    "accountDetails.password",
    "accountDetails.confirmPassword"
  ],
  // 2. PersonalInformation
  [
    "personalDetails.fullName",
    "personalDetails.dateOfBirth",
    "personalDetails.gender",
    "personalDetails.nationality",
    "personalDetails.address.city",
    "personalDetails.address.street",
    "personalDetails.address.country",
    "personalDetails.postalCode",
    "personalDetails.profilePhoto"
  ],
  // 3. JobPreference (uses experienceDetails array)
  ["experienceDetails"],
  // 4. ResumeInformation (no fields in schema – adjust if needed)
  [],
  // 5. EducationalDetails (uses educationDetails array)
  ["educationDetails"],
  // 6. Skills
  [
    "skillsDetails.skills",
    "skillsDetails.digitalSkills",
    "skillsDetails.languageSkills"
  ],
  // 7. AdditionalDetails
  [
    "additionalDetails.profileSummary",
    "additionalDetails.portfolioLink"
  ],
  // 8. PreviewDetails
  []
] as const;
const Page = () => {
  const componentsArray = [AccountInformation,
    PersonalInformation,
    JobPreference,
    ResumeInformation,
    EducationalDetails,
    Skills,
    AdditionalDetails,
    PreviewDetails]
  const [nextValue, setNextValue] = useState(0)
  const [globalError, setGlobalError] = useState<string | null>(null);
  const methods = useForm<registerDetails>({
    resolver: zodResolver(registerInfo),
    mode: "onChange"
  })
  const handleNext = async (currentIndex: number) => {
    const fieldsToValidate = stepFields[currentIndex]; // or nextValue - 1
    const isValid = await methods.trigger(fieldsToValidate);
    if (isValid) {
      setNextValue(prev => prev + 1);
    } else {
      setGlobalError('Please fix the errors before proceeding to the next step.');
    }
  };
  return (
    <div>
      <FormProvider {...methods}>
        {globalError && <FormMessage error={globalError} />}
        <form>
          {componentsArray.map((Component, index) => {
            return <div key={index}>
              {nextValue === index &&
                <div>
                  <Component />
                  {nextValue < componentsArray.length - 1 && <ResponsiveButton onClick={() => handleNext(index)} type="button" text="Next" icon={ChevronRight} />}
                  {nextValue > 0 && <ResponsiveButton onClick={() => setNextValue(nextValue - 1)} type="button" text="Back" icon={ChevronLeft} />}
                </div>}
            </div>
          })}
        </form>
      </FormProvider>
    </div>
  )
}
export default Page