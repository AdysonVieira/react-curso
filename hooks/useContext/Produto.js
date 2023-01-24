import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
    const global = React.useContext(GlobalContext);
    
    return (
        <div>{global.contar}
            <button onClick={() => global.addUm()}>{global.contar}</button>
            
            <button onClick={() => global.addDois()}>{global.contar}</button>
        </div>
    )
}

export default Produto
