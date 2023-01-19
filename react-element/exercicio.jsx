// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};

const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};

const App = () => {
    const dados = luana;
    const {cliente, idade, compras} = dados
    const total = compras
        .map( (compra) => +compra.preco.replace('R$ ','') )
        .reduce( (acc, preco) => acc + preco, 0 )

    return (
        <div>
            <p>Cliente: {cliente}</p>
            <p>Idade: {idade}</p>
            <p>Situação: <span style={ {color: total < 10000 ? 'green' : 'red'} }>{(total < 10000) ? 'Ativa' : 'Inativa'}</span></p>
            <p>Total de Gastos: R${total}</p>
            {total > 10000 && <p>Você está gastando demais</p>}

        </div>
    )
};
  