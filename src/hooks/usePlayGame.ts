import { useCallback, useState } from "react";
import { Answer } from "../types/Answer";
import { Status } from "../types/status";
import { STATUS } from "../constants/Status";
import { ANSWERS } from "../constants/Answers";

const usePlayGame = () => {
    const [status, setStatus] = useState<Status | null>(null);
    const [cpuAnwser, setCpuAnwser] = useState<Answer | null>(null);

    const generateCpuAnswer = useCallback((choice: Answer) => {
        const randomIdex = Math.floor(Math.random() * ANSWERS.length);
        const cpuAnswer = ANSWERS[randomIdex];

        setCpuAnwser(cpuAnswer);

        if (cpuAnswer === choice) {

            setStatus(STATUS.Draw);
            return
        }

        if (choice === ANSWERS[2] && cpuAnswer === ANSWERS[0]) {
            setStatus(STATUS.Win);
            return
        }

        if (choice === ANSWERS[0] && cpuAnswer === ANSWERS[1]) {
            setStatus(STATUS.Win);
            return
        }

        if (choice === ANSWERS[1] && cpuAnswer === ANSWERS[2]) {
            setStatus(STATUS.Win);
            return
        }

        setStatus(STATUS.Lose);
    }, []);

    return { status, cpuAnwser, generateCpuAnswer };
}

export default usePlayGame;