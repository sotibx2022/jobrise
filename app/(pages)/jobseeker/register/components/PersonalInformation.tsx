import FormInput from '@/app/components/form/inputs/FormInput'
import { personalData } from '@/app/data/registerData/personalData'
import { registerDetails } from '@/app/types/employeeRegister'
const PersonalInformation = () => {
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