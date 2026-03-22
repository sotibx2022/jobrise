import React from 'react'
interface FormMessageProps {
  error?: string | null;
}
const FormMessage: React.FC<FormMessageProps> = ({ error }) => {
  return (
    <div>
      {error ? <span className='errorMessage'>{error}</span> : <span className='successMessage opacity-0'>Looks good!</span>}
    </div>
  )
}
export default FormMessage