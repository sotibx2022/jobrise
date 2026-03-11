'use client'
import { employeePhoneLogin } from '@/app/types/employeeLogin'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from '../inputs/FormInput'
const PhoneLogin = () => {
    const methods = useForm<employeePhoneLogin>({resolver:zodResolver(employeePhoneLogin),mode:'onChange'})
    return (
        <form>
            <FormProvider {...methods}>
            <FormInput <employeePhoneLogin> 
             lable="phone" placeholder="9864890543" name="phone" type="text" />
            <FormInput <employeePhoneLogin>
             lable="password" placeholder="johnTYZtag12@KTE" name="password" type="text" />
            <button>submit</button>
            </FormProvider>
        </form>
    )
}
export default PhoneLogin