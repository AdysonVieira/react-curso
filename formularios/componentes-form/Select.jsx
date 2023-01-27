import React from 'react'

const Select = ({ options, value, setValue, ...props}) => {
  return (
    <select>
        <option value={value} disabled>Selecione</option>
        {options.map((option) => (
            <option key={option} value={option}>{option}</option>
        ))}
    </select>
  )
}

export default Select