import React from 'react'

const Radio = ({ options, value, setValue, ...props }) => {
    
    return (
        <div>
            <h1>{props.pergunta}</h1>
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
        </div>
    )
}

export default Radio