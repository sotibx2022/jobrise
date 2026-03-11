import React from 'react'
interface FormMessageProps {
  error?: string
}
const FormMessage: React.FC<FormMessageProps> = ({ error }) => {
  return (
    <div>
      {error ? <span className='errorMessage'>{error}</span> : <span className='successMessage'>Valid Input</span>}
    </div>
  )
}
export default FormMessage