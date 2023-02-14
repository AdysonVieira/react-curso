// Rota Dinâmica ############
// O uso de :nome irá definir uma rota dinâmica, onde o nome poderá ser utilizamo como uma variável dentro do componente. Serve para buscarmos rotas dinâmicas como produto/notebook ou produto/smartphone.

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Produto from './Produto';

const App = () => {

    // Hook que retorna um objeto com pathname, serach e outras propriedades
    const location = useLocation();

    // Roda toda vez que a rota é modificada
    React.useEffect(() => {
        console.log('A rota mudou')
    }, [location])

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="produto/:id" element={<Produto />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;