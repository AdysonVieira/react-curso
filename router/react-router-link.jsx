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





// NavLink
// Para usar em links de navegação, assim o link ativo é identificado e pode ser estilizado

// Com importação de CSS externo
import { NavLink } from 'react-router-dom';
import "Header.css"

const Header2 = () => {
    return (
        <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="sobre">Sobre</NavLink>
            <NavLink to="contato">Contato</NavLink>
        </nav>
    );
};

// Sem importação de CSS externo
import { NavLink } from 'react-router-dom';

const Header3 = () => {
    return (
        <nav>
            <NavLink to="/" end activeStyle={{ color: 'tomato' }}>Home</NavLink>
            <NavLink to="sobre" activeStyle={{ color: 'tomato' }}>Sobre</NavLink>
            <NavLink to="contato" activeStyle={{ color: 'tomato' }}>Contato</NavLink>
        </nav>
    );
};