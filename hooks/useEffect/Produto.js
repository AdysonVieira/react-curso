import React from "react";

const Produto = ( { data } ) => {
    
    return (
        <div>
            <h1>{data.nome}</h1>
            <p>R$ {data.preco}</p>
        </div>
    )

}

export default Produto