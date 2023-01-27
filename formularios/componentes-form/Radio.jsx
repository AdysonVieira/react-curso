import React from 'react'

const Radio = ({ options, value, setValue, ...props }) => {
    return (
        <>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        value={option}
                        checked={option === value}
                        onChange={({ target }) => setValue(target.value)}
                        />
                    {label}
                </label>
            ))}
        </>
    )
}

export default Radio