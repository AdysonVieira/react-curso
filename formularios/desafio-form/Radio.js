import React from 'react'

const Radio = ({ options, value, setValue, ...props }) => {
    
    return (
        <fieldset>
            <legend>{props.pergunta}</legend>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type='radio'
                        checked={option === value}
                        value={option}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    {option}
                </label>
            ))}
        </fieldset>
    )
}

export default Radio