import React from "react";
import { NavLink } from "react-router-dom";
import Head from "./Head";



const Produtos = () => {
    return (
        <section>
            <Head title="Produtos" description="Essa é a Página de Produtos"/>
            <h1>Essa é a Página de Produtos</h1>
            <nav>
                <NavLink to="notebook">Notebook</NavLink>{'   '}
                <NavLink to="smartphone">Smartphone</NavLink>
            </nav>
            
        </section>
    )
}

export default Produtos