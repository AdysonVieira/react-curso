import React from "react";
import Button from "./Button"
import Input from "./Input"

const Form = () => {
    return (
        <React.Fragment>
            <form>
                <Input type="text" name="name" id="name" required/>
                <Input type="email" name="name" id="name" />
                <Button />
            </form>
        </React.Fragment>
    )
}