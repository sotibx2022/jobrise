import React from 'react'
import NumberInput from '../inputs/NumberInput'
import PasswordInput from '../inputs/PasswordInput'
const PhoneLogin = () => {
    return (
        <div>
            <NumberInput numberName='Phone Number' />
            <PasswordInput />
            <button>submit</button>
        </div>
    )
}
export default PhoneLogin