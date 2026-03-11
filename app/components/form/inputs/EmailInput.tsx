'use client'
import FormMessage from "../FormMessage"
import { Input } from "@/components/ui/input"
import Lable from "./Lable"
import useDebounce from "@/app/hooks/useDebounce"
import { useFormContext } from "react-hook-form"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
const EmailInput = () => {
  const { register, formState: { errors }, watch } = useFormContext()
  const email = watch('email')
  const { debounceValue } = useDebounce(1000, email)
  // Show form message only after user stops typing
  const showFormMessage = email === debounceValue && email !== ""
  const validating = !showFormMessage
  const validInput = showFormMessage && !errors.email
  const invalidInput = showFormMessage && errors.email
  return (
    <div>
      <Lable name="Email" />
      <InputGroup>
        <InputGroupInput 
          type="email"
          placeholder="johnmagtag12@gmail.com"
          {...register("email")}/>
        <InputGroupAddon align="inline-end">{validating?"validating":validInput?"green":"red"}</InputGroupAddon>
      </InputGroup>
      {showFormMessage && <FormMessage error={errors.email?.message as string} />}
    </div>
  )
}
export default EmailInput
// shouldnt show an error untill the user stops typing.✔
// need to show error or success message
// need to show border color green or red
// need to show animation when user is typing.
// need to show animation of icon while user typing.
// need to show success or error message.