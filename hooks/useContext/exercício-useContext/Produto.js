import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {

    const { data } = React.useContext(GlobalContext);

    if (data === null) return null

    return (
        <div>
        Produtos: {data.map((produto) => <li key={produto.id}>{produto.nome}</li>)}
      </div>
    )

}

export default Produto