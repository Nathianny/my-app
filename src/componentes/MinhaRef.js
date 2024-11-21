import React, { Fragment, useRef } from 'react';

function MinhaRef() {
    const meuInputRef = useRef(null);

    const focarNoInput = () => {
        meuInputRef.current.focus();
    };

    return (
        <Fragment>
            <input ref={meuInputRef} type="password" />
            <button onClick={focarNoInput}>Clique para digitar a senha</button>
        </Fragment>
    );
}

export default MinhaRef;