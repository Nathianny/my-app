import React, { useState } from 'react';

function BotaoAlternar() {
    const [textoBotao, MudarTextoBotao] = useState('Salvar');

    const handleClick = () => {
        MudarTextoBotao('Cadastrar');
    };

    return (
        <button onClick={handleClick}>
            {textoBotao}
        </button>
    );
}

export default BotaoAlternar;

