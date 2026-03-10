'use client'
import React, { useState } from "react"
import FormMessage from "../FormMessage"
import { Input } from "@/components/ui/input"
import Lable from "./Lable"
const EmailInput = ({ form }: any) => {
  const [showFormMessage, setShowFormMessage] = useState(false)
  return (
    <div>
      <Lable name="Email" />
      <Input type="email" placeholder="johnmagtag12@gmail.com" onChange={() => setShowFormMessage(true)} />
      {showFormMessage && <FormMessage />}
    </div>
  )
}
export default EmailInput