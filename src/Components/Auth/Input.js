import React from 'react'

const Input = ({ name, handleChange, autoFocus, type, placeholder }) => {
    return (
        <input
            name={name}
            onChage={handleChange}
            required
            autoFocus={autoFocus}
            type={type}
            placeholder={placeholder}
            style={{display: 'block'}}
        />
    )
}

export default Input
