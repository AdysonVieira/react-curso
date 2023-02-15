import React from "react";
import { useParams } from "react-router";

const Produto = () => {
    const params = useParams();
    return (
        <section>
            <h1>Produtos: {params.id}</h1>
            <nav></nav>
        </section>
    )
}

export default Produto