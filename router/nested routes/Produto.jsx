import React from "react";
import { Routes, Route, useParams, NavLink } from "react-router-dom";
import ProdutoDescricao from "./ProdutoDescricao";
import ProdutoAvaliacao from "./ProdutoAvaliacao";

// <Outlet /> para substituir o Routes caso as rotas sejam definidas juntas

const Produto = () => {
    const params = useParams();
    return (
        <section>
            <h1>Produtos: {params.id}</h1>
            <nav>
                <NavLink to=''>Descrição</NavLink>{'  '}
                <NavLink to='avaliacao'>Avaliação</NavLink>
            </nav>
            <Routes>
                <Route path='' element={<ProdutoDescricao />} />
                <Route path='avaliacao' element={<ProdutoAvaliacao />} />
            </Routes>
        </section>
    )
}

export default Produto