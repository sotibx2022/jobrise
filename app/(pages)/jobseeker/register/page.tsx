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
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerDetails, registerInfo } from "@/app/types/employeeRegister"
const Page = () => {
  const methods = useForm<registerDetails>({
    resolver: zodResolver(registerInfo),
    mode: "onChange"
  })
  return (
    <div>
      <FormProvider {...methods}>
        <form>
          <AccountInformation />
          <PersonalInformation />
          <ResumeInformation />
          <JobPreference />
          <EducationalDetails />
          <Skills />
          <AdditionalDetails />
          <PreviewDetails />
        </form>
      </FormProvider>
    </div>
  )
}
export default Page