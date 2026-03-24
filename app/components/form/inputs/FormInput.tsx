'use client'
import FormMessage from "../FormMessage"
import useDebounce from "@/app/hooks/useDebounce"
import { useFormContext, Path, FieldValues, get, Controller } from "react-hook-form"
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
import { Label } from "@/components/ui/label"
interface FormInputProps<T extends FieldValues> {
  lable: string,
  placeholder: string,
  name: Path<T>,
  type: string,
  options?: string[]
}
const FormInput = <T extends FieldValues>({ lable, placeholder, name, type, options }: FormInputProps<T>) => {
  const { register, formState: { errors }, watch,control } = useFormContext()
  const inputValue = watch(name)
  const error = get(errors, name);
  console.log(error?.message);
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
      <Label>{lable}</Label>
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
  if (type === 'radio') {
    return <div>
      <Label>{lable}</Label>
      <Controller
  name={name}
  control={control}   // from useForm()
  render={({ field }) => (
    <RadioGroup
      className="flex flex-row items-center gap-5 py-4"
      value={field.value}            // the current selected value
      onValueChange={field.onChange} // updates the form value
      onBlur={field.onBlur}
      ref={field.ref}                // optional, for focus management
    >
      {options && options.map((option: string, index: number) => (
        <div key={index} className="flex items-center gap-3">
          <RadioGroupItem value={option} id={`gender-${option}`} />
          <Label htmlFor={`gender-${option}`} >{option}</Label>
        </div>
      ))}
      <FormMessage error={error?.message} />
    </RadioGroup>
  )}
/>
    </div>
  }
  return (
    <div>
    <Label>{lable}</Label>
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