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
import { stepFields } from "@/app/types/employeeRegisterFields";
import Steps from "@/app/components/structure/Steps";
import { ButtonGroup } from "@/components/ui/button-group";
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
      <Card className='container'>
        <CardHeader>
          <CardTitle>Employee Register Form</CardTitle>
          <Steps stepsLength={componentsArray.length} currentStep={nextValue} />
        </CardHeader>
        <FormProvider {...methods}>
          <form>
            {componentsArray.map((Component, index) => (
              <div key={index}>
                {nextValue === index && (
                  <>
                    <CardContent className="my-4">
                      <Component />
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4">
                      <FormMessage error={globalError ? globalError : undefined} />
                      <ButtonGroup>
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
                            iconLast={true}
                          />
                        )}
                      </ButtonGroup>
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