import { employeePinLogin } from '@/app/types/employeeLogin'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import FormInput from '../inputs/FormInput'
const PinLogin = () => {
  const methods = useForm<employeePinLogin>({ resolver: zodResolver(employeePinLogin), mode: 'onChange' })
  return (
    <form>
      <FormProvider {...methods}>
        <FormInput <employeePinLogin>
          lable="pin" placeholder="2345" name="pin" type="text" />
        <button>submit</button>
      </FormProvider>
    </form>
  )
}
export default PinLogin