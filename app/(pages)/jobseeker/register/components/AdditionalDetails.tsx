import NextButton from '@/app/components/buttons/NextButton'
import FormInput from '@/app/components/form/inputs/FormInput'
import React from 'react'
const AdditionalDetails = () => {
  return (
    <div>
      <h2>Additional Details</h2>
      <FormInput lable={'Profile Summary'} placeholder={'This is for the profile summary of the user'} name={'profileSummary'} type={'textarea'}/>
    </div>
  )
}
export default AdditionalDetails