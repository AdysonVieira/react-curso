import React from "react";

const Input = ( {label, type, id, name, ...props} ) => {
    return (
        <React.Fragment>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} {...props}/>
        </React.Fragment>
    )
}

export default Input