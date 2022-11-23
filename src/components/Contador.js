import React from "react";

import { useContador } from "../hook/useContador";

export const Contador = () => {

    const { num, aumentarNum, disminuirNum } = useContador();

    return <div>
        <h2> Contador</h2>

        <div>
            <button onClick={aumentarNum}> + </button>
            <p> {num}</p>
            <button onClick={disminuirNum}> - </button>
        </div>
    </div>
}

