// Nested Routes
// Utilizamos nested routes quando precisamos de rotas dentro de rotas. Como por exemplo: perfil/editar e perfil/certificados e etc. Utilize o \* para definir que existem outras rotas dentro.

// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./Sobre";
import Home from "./Home";
import Header from "./Header";
import Produto from "./Produto";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='sobre' element={<Sobre />} />
                <Route path='produto/:id/*' element={<Produto />} />
            </Routes>
        </BrowserRouter>
    )
}


// Usando o Outlet
const App2 = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='sobre' element={<Sobre />} />
                <Route path='produto/:id' element={<Produto />}>
                    <Route path='' element={<ProdutoDescricao />} />
                    <Route path='avaliacao' element={<ProdutoAvaliacao />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}