'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { employeeEmailLogin } from '@/app/types/employeeLogin'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from '../inputs/FormInput'
const EmailLogin = () => {
    const methods = useForm<employeeEmailLogin>({ resolver: zodResolver(employeeEmailLogin), mode: 'onChange' })
    return (
        <FormProvider {...methods}>
            <form>
                <FormInput <employeeEmailLogin>
                    lable="Email" placeholder="johnmagtag12@gmail.com" name="email" type="text" />
                <FormInput <employeeEmailLogin>
                    lable="password" placeholder="ktxbG@34rfd" name='password' type='text' />
                <button>Submit</button>
            </form>
        </FormProvider>
    )
}
export default EmailLogin