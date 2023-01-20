import React from "react";
import Produto from "./Produto";
import Titulo from "./Titulo";

const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Product = () => {
    const dados = produtos;
    return (
        <section>
            <Titulo texto='Produtos' />
            {dados.map( (produto) => {
                return (
                    <Produto key={produto.nome} {...produto} />
                )
            })}
        </section>
    )
}

export default Product