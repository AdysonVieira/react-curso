import React from "react";

const Card = ( { data } ) => {
    return (
        <section>
            <h1>{data.nome}</h1>
            <p>R$ {data.preco}</p>
            <img src={data.fotos[0].src} alt={data.descricao}></img>
        </section>
    )    

}

export default Card