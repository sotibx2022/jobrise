import React from 'react'
interface FormMessageProps {
  error?: string | null | undefined;
}
const FormMessage: React.FC<FormMessageProps> = ({ error }) => {
  return (
    <div>
      {error ? <span className='errorMessage'>{error}</span> : <span className='hiddenMessage'>Initial Message</span>}
    </div>
  )
}
export default FormMessage