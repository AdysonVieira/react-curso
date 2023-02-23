// Code Splitting ###########
// Com o Lazy e Suspense podemos dividir o código da nossa aplicação. Assim o React só irá carregar certas partes do código, quando as mesmas forem necessárias

import React from "react";
const Contato = React.lazy(() => import('./Contato')); // é importando dentro de uma constante, o método lazy recebe um callback que importa o componente desejado.

// React.Suspense é onde será carregando, no caso quando COntato for necessário ele será renderizado dentro do Suspense | fallback é o que será exibido enquanto carrega

const App = () => {
    const [ativar, setAtivar] = React.useState(false);

    return (
        <div>
            {ativar && (
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <Contato />
                </React.Suspense>
            )}
        </div>
    )
}

