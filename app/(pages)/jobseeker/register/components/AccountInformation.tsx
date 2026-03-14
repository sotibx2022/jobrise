"use client"
import { useFormContext } from "react-hook-form"
import { accountDetails, registerDetails, registerInfo } from "@/app/types/employeeRegister"
import { z } from "zod"
import FormInput from "@/app/components/form/inputs/FormInput"
import { accountInfo } from "@/app/data/registerData/accountData"
const AccountInformation = () => {
  useFormContext<registerDetails>()
  return (
    <div>
      {accountInfo.map((info, index) => {
        return <FormInput<registerDetails>
          key={index}
          lable={info.lable}
          placeholder={info.placeholder}
          name={`accountDetails.${info.name}`}
          type={info.type}
        />
      })}
    </div>
  )
}
export default AccountInformation