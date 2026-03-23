import FormInput from '@/app/components/form/inputs/FormInput'
import { personalData } from '@/app/data/registerData/personalData'
import { registerDetails } from '@/app/types/employeeRegister'
import React from 'react'
const PersonalInformation = () => {
  console.log(personalData);
  return (
    <div>
      {personalData.map((info, index) => {
        return <FormInput<registerDetails>
          key={index}
          lable={info.lable}
          placeholder={info.placeholder}
          name={`personalDetails.${info.name}`}
          type={info.type}
          options={info.options??undefined}
        />
      })}
    </div>
  )
}
export default PersonalInformation