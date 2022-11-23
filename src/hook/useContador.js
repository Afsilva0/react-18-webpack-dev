
import { useState } from "react";


export const useContador = () => {

    const [num, setNum] = useState(0);


    const aumentarNum = () => {
        setNum(num + 1);
    }

    const disminuirNum = () => {
        setNum(num - 1);
    }

    return {
        num,
        aumentarNum,
        disminuirNum
    }
}