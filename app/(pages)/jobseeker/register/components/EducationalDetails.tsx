'use client'
import NextButton from '@/app/components/buttons/NextButton';
import FormInput from '@/app/components/form/inputs/FormInput';
import { educationInfoFields } from '@/app/data/registerData/educationData';
import { registerDetails } from '@/app/types/employeeRegister';
import React, { useState } from 'react'
const EducationalDetails = () => {
  const [educations, setEducations] = useState(1);
  return (
    <div>
      {Array.from({ length: educations }).map((_, eduIndex) => (
        <div key={eduIndex}>
          {educationInfoFields.map((info, fieldIndex) => (
            <FormInput<registerDetails>
              key={fieldIndex}
              lable={info.lable}
              placeholder={info.placeholder}
              name={`educationDetails.${eduIndex}.${info.name}` as const}
              type={info.type}
            />
          ))}
        </div>
      ))}
      <button type="button" onClick={() => setEducations(educations + 1)}>
        Add
      </button>
    </div>
  )
}
export default EducationalDetails