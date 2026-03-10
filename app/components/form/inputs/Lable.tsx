import React from 'react'
interface lableProps{
  name:string
}
const Lable:React.FC<lableProps> = ({name}) => {
  return (
    <strong>{name}</strong>
  )
}
export default Lable