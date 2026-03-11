'use client'
import FormMessage from "../FormMessage"
import Lable from "./Lable"
import useDebounce from "@/app/hooks/useDebounce"
import { useFormContext, Path, FieldValues } from "react-hook-form"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
interface FormInputProps<T extends FieldValues> {
  lable: string,
  placeholder: string,
  name: Path<T>,
  type: string,
}
const FormInput = <T extends FieldValues>({ lable, placeholder, name, type }: FormInputProps<T>) => {
  const { register, formState: { errors }, watch } = useFormContext()
  const inputValue = watch(name)
  console.log(inputValue)
  const error = errors[name]
  const { debounceValue } = useDebounce(1000, inputValue)
  // Show form message only after user stops typing
  const hasValue =
  inputValue !== undefined &&
  inputValue !== null &&
  inputValue !== "" &&
  !Number.isNaN(inputValue)
  const showFormMessage = inputValue === debounceValue && hasValue
  const validInput = showFormMessage && !errors.name
  return (
    <div>
      <Lable name={lable} />
      <InputGroup>
        <InputGroupInput
          type={type}
          placeholder={placeholder}
          {...register(name, { valueAsNumber: type === "number" })} />
        {hasValue && <InputGroupAddon align="inline-end">{!showFormMessage ? "validating" : validInput ? "green" : "red"}</InputGroupAddon>}
      </InputGroup>
      {showFormMessage && <FormMessage error={error?.message as string} />}
    </div>
  )
}
export default FormInput
