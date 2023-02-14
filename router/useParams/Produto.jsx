import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const Produto = () => {
    // Retorna um objeto com todos os parametros dinâmicos
    const params = useParams();
    const location = useLocation();

    // produto/notebook?q=verde&memoria=16
    const search = new URLSearchParams(location.search)
    console.log(search.get('memoria')) // 16


    return (
        <div>Produto: {params.id}</div>
    )
}

export default Produto