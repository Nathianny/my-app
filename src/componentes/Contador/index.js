import './index.css'
import { useState } from "react";

function Contador(myprops) {
    const [contagem, setContagem] = useState(0)

    return (
        <div>
            <p>Contagem: {contagem}</p>
            <button
                className={myprops.classCss}
                onClick={() => setContagem(contagem + 1)}
            >
                Incrementar
            </button>
        </div>
    )
}

export default Contador