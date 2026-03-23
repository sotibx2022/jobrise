'use client'
import FormMessage from "../FormMessage"
import Lable from "./Lable"
import useDebounce from "@/app/hooks/useDebounce"
import { useFormContext, Path, FieldValues, get } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import Success from "../../animatedIcons/Success"
import Error from "../../animatedIcons/Error"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
interface FormInputProps<T extends FieldValues> {
  lable: string,
  placeholder: string,
  name: Path<T>,
  type: string,
  options?: string[]
}
const FormInput = <T extends FieldValues>({ lable, placeholder, name, type, options }: FormInputProps<T>) => {
  const { register, formState: { errors }, watch } = useFormContext()
  const inputValue = watch(name)
  const error = get(errors, name);
  const { debounceValue } = useDebounce(1000, inputValue)
  // Show form message only after user stops typing
  const hasValue =
    inputValue !== undefined &&
    inputValue !== null &&
    inputValue !== "" &&
    !Number.isNaN(inputValue)
  const showFormMessage = inputValue === debounceValue && hasValue
  const validInput = showFormMessage && !error
  if (type === "textarea") {
    return <div>
      <Lable name={lable} />
      <Textarea placeholder={placeholder} {...register(name)} />
      {showFormMessage && <FormMessage error={error?.message as string} />}
    </div>
  }
  if(type==='select'){
    if(name==='personalDetails.nationality' || name==='personalDetails.address.country'){
     return  <div>Country Selection</div>
  }else{
    return <div>Other Selections</div>
  }
}
  if (type === 'checkbox') {
    return <div>
      <Lable name={lable} />
      <>
        <RadioGroup
          {...register(name)}
          className={'flex flex-row items-center gap-5 py-4'}>
          {options && options.map((option: string, index: number) => (
            <div key={index} className="flex items-center gap-3">
              <RadioGroupItem value={option} id={`gender-${option}`} />
              <Lable htmlfor={`gender-${option}`} name={option} />
            </div>
          ))}
        </RadioGroup>
      </>
    </div>
  }
  return (
    <div>
      <Lable name={lable} />
      <InputGroup>
        <InputGroupInput
          type={type}
          placeholder={placeholder}
          {...register(name, { valueAsNumber: type === "number" })} />
        {hasValue && <InputGroupAddon align="inline-end">{!showFormMessage ? <Spinner /> : validInput ? <Success /> : <Error />}</InputGroupAddon>}
      </InputGroup>
      <FormMessage error={showFormMessage ? (error?.message ? error.message : undefined) : null} />
    </div>
  )
}
export default FormInput