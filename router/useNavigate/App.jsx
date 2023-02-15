import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "./Header";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Header />
                <Route path="/" element={< Home/>} />
                <Route path="sobre" element={< Sobre/>} />
                <Route path="login" element={< Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App