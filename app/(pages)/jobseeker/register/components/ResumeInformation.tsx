'use client'
import React, { useState } from 'react'
import { professionalInfoFields } from '@/app/data/registerData/resumeData'
import FormInput from '@/app/components/form/inputs/FormInput'
import { registerDetails } from '@/app/types/employeeRegister'
const ResumeInformation = () => {
  const [experiences, setExperiences] = useState(1);
  return (
    <div>
      {Array.from({ length: experiences }).map((_, expIndex) => (
        <div key={expIndex}>
          {professionalInfoFields.map((info, fieldIndex) => (
            <FormInput<registerDetails>
              key={fieldIndex}
              lable={info.lable}
              placeholder={info.placeholder}
              name={`experienceDetails.${expIndex}.${info.name}` as const}
              type={info.type}
            />
          ))}
        </div>
      ))}
      <button type="button" onClick={() => setExperiences(experiences + 1)}>
        Add
      </button>
    </div>
  )
}
export default ResumeInformation