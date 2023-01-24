import React from 'react'

export const GlobalContext = React.useContext()

export const GlobalStorage = ({ children }) => {
    const [contar, setContar] = React.useState(0);

    function addUm() {
        setContar( contar => contar + 1)
    }
    
    function addDois() {
        setContar( contar => contar + 2)
    }

    return (
        <GlobalContext.Provider value={{ contar, setContar, addUm, addDois }}>
            {children}
        </GlobalContext.Provider>
    )
}
