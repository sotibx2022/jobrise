import React from 'react'
import {AccountInformation, PersonalInformation, JobPreference, ResumeInformation, EducationalDetails, Skills, AdditionalDetails, PreviewDetails} from './components'   
const page = () => {
  return (
    <div>
        <AccountInformation/>
        <PersonalInformation/>
        <ResumeInformation/>
        <JobPreference/>
        <EducationalDetails/>
        <Skills/>
        <AdditionalDetails/>
        <PreviewDetails/>
    </div>
  )
}
export default page