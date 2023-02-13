// React Router Dom
// É uma extensão que permite gerenciarmos as rotas do React. Ela é desenvolvida e mantida pela empresa React Trainning

// npm i react-router-dom@latest

// Necessário importar BrowserRouter, Routes e Route
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contato from "./Contato";
import Sobre from "./Sobre";
import Home from "./Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="Contato" element={<Contato />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}