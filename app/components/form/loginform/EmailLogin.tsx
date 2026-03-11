'use client'
import EmailInput from '../inputs/EmailInput'
import PasswordInput from '../inputs/PasswordInput'
import { FormProvider, useForm } from 'react-hook-form'
import { employeeEmailLogin } from '@/app/types/employeeLogin'
import { zodResolver } from '@hookform/resolvers/zod'
const EmailLogin = () => {
    const methods = useForm<employeeEmailLogin>({ resolver: zodResolver(employeeEmailLogin), mode: 'onChange' })
    return (
        <FormProvider {...methods}>
        <form>
            <EmailInput/>
            <PasswordInput />
            <button>Submit</button>
        </form>
        </FormProvider>
    )
}
export default EmailLogin