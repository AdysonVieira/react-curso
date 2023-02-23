// PropTypes ###########
// O PropTypes irá retornar um erro caso o valor da propriedade passada seja um tipo de dado diferente do especificado. É também possível especificar se uma propriedade é obrigatória ou não. O prop-types já vem instalado no create-react-app, basta importarmos o mesmo para utilizarmos

// https://reactjs.org/docs/typechecking-with-proptypes.html

import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    return (
        <button 
            style={{
                margin: props.margin,
                width: `${props.width}px`,
                height: `${props.width / 3}px`,
            }}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

// definindo um valor padrão caso não seja passado nenhum valor
Button.defaultProps = {
    margin: '10px'
}
// definindo os tipos de dados esperados nas props
Button.PropTypes = {
    margin: PropTypes.string.isRequired,
    width: PropTypes.number,
    disabled: PropTypes.bool,
};

export default Button;
