import { useState } from "react";

interface MessageProps {
    messageA: string;
    messageB: string;
}

export const Message = ({messageA, messageB}: MessageProps) => {
    const [showMessageA, setShowMessageA] = useState(false);

    const changeMesaageA = () => setShowMessageA(true);
    const changeMesaageB = () => setShowMessageA(false);

    if (showMessageA){
        return <h3 onClick={changeMesaageB}>{messageA}</h3>
    }

    return <h3 onClick={changeMesaageA}>{messageB}</h3>

}

