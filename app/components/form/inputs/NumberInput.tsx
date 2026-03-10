import React from 'react'
import { Input } from "@/components/ui/input"
import FormMessage from '../FormMessage'
import Lable from './Lable'
interface numberInputProps{
  numberName:string
}
const NumberInput:React.FC<numberInputProps> = ({numberName}) => {
  return (
    <div>
          <Lable name={numberName}/>
          <Input type="email" placeholder="Enter your email" />
          <FormMessage />
        </div>
  )
}
export default NumberInput