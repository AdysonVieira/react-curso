import React from 'react'
import { NavLink, Routes, Route, useParams } from 'react-router-dom'
import ProdutoDescricao from './ProdutoDescricao'
import ProdutoAvaliacao from './ProdutoAvaliacao'
import Head from './Head'
const ProdutoShow = () => {
    const params = useParams();

    return (
        <div>
            <Head title={`Produtos | ${params.id}`} description='Página de Produtos' />
            <h1>Produto: {params.id}</h1>
            <nav>
                <NavLink to='' activeStyle={{ color: "tomato" }}>Descrição</NavLink>{'   '}
                <NavLink to='avaliacao' activeStyle={{ color: "tomato"}}>Avaliação</NavLink>
            </nav>
            <Routes>
                <Route path="" element={<ProdutoDescricao />} />
                <Route path="avaliacao" element={<ProdutoAvaliacao />} />
            </Routes>
        </div>
    )
}

export default ProdutoShow