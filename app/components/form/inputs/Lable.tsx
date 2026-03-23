import { Label } from '@/components/ui/label'
import React from 'react'
interface lableProps {
  name: string
  htmlfor?:string
}
const Lable: React.FC<lableProps> = ({ name, htmlfor }) => {
  return (
    <Label className='strongParagraph' htmlFor={htmlfor}>
      {name}
    </Label>
  )
}
export default Lable