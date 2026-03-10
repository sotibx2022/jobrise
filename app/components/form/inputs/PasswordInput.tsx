import React from 'react'
import { Input } from "@/components/ui/input"
import FormMessage from '../FormMessage'
import Lable from './Lable'
const PasswordInput = () => {
  return (
    <div>
      <Lable name='password' />
      <Input type="email" placeholder="akw2ed@GHcd" />
      <FormMessage />
    </div>
  )
}
export default PasswordInput