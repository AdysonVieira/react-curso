import React from "react";

const Head = (props) => {
    document.title = props.title
    document
        .querySelector("meta[name='description']")
        .setAttribute('content', props.description)
    
        return <></>
}

export default Head