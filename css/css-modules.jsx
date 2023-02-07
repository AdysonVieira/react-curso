// CSS Modules
// Os modules garantem que as classes utilizadas sejam sempre únicas, evitando o conflito. O modo já vem configurado com o create-react-app, basta definirmos o nome do arquivo css com a palavra.module. Ex. Produto.module.css. Devemos definir um nome para a importação, a mesma será transformada em um obejto que possui nomes úncos para as classes.

// Produto.js
import styles from './Produto.modules.css';

const Produto = () => {
    return (
        <div>
            <h1 className={styles.titulo}>Notebook</h1>
            <p className={styles.preco}>R$12000</p>
            <button className={styles.button}>Comprar</button>
        </div>
    )
}




// camelCase
// Utilize camelCase tituloPrincipal, já que o nome da classe se transformará em uma propriedade de um objeto JavaScript. Não utilize hifens titulo-principal.

// .tituloPrincipal {
//     color: blue;
// }