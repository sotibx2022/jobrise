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
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="pageCenter">
      <Card>
        <CardHeader>
          <CardTitle>Employee Register Form</CardTitle>
        </CardHeader>
        <FormProvider {...methods}>
          <form>
            {componentsArray.map((Component, index) => (
              <div>
                {nextValue === index && (
                  <>
                    <CardContent key={index} className="my-4">
                      <Component />
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4">
                      {globalError && <FormMessage error={globalError} />}
                      {nextValue > 0 && (
                        <ResponsiveButton
                          onClick={() => setNextValue(nextValue - 1)}
                          type="button"
                          text="Back"
                          icon={ChevronLeft}
                        />
                      )}
                      {nextValue < componentsArray.length - 1 && (
                        <ResponsiveButton
                          onClick={() => handleNext(index)}
                          type="button"
                          text="Next"
                          icon={ChevronRight}
                        />
                      )}
                    </CardFooter>
                  </>
                )}
              </div>
            ))}
          </form>
        </FormProvider>
      </Card>
    </div>
  )
}
export default Page