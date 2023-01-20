import React from 'react'
import ButtonCloseModal from './ButtonCloseModal'

const Modal = ( {ativo, setAtivo}) => {
    if (ativo) {
        return (
            <div>
                Isso é um Modal
                <ButtonCloseModal setAtivo={setAtivo}/>
            </div>
        )
    } else {
        return null
    }
}

export default Modal 