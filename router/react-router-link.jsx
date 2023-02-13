// Link
// O link irá modificar a rota e renderizar o novo componente sem recarregar a página.

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="sobre">Sobre</Link>
            <Link to="contato">Contato</Link>
        </nav>
    );
};