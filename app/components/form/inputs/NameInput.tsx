import React from 'react'
import { Input } from "@/components/ui/input"
import FormMessage from '../FormMessage'
import Lable from './Lable'
interface NameInput{
  name:string,
  nameInputExample:string
}
const NameInput:React.FC<NameInput> = ({name,nameInputExample}) => {
  return (
     <div>
      <Lable name={name}/>
      <Input type="string" placeholder={nameInputExample} />
      <FormMessage />
    </div>
  )
}
export default NameInput