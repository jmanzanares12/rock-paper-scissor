import useGameStore from "../store/GameStore";
import { Choice } from "../components/Choice";
import usePlayGame from "../hooks/usePlayGame";
import { useEffect, useState } from "react";
import { Result } from "../components/Result";
import Button from "../components/Button";

const PlayModule = () => {

    const choice = useGameStore((state) => state.choice);
    const { status, cpuAnwser, generateCpuAnswer } = usePlayGame();
    const [countDown, setCountDown] = useState(3);

    useEffect(() => {
        if (choice) {
            generateCpuAnswer(choice);
        }
    }, [choice, generateCpuAnswer]);

    useEffect(() => {
        if (countDown > 0) {
            setTimeout(() => setCountDown(countDown - 1), 1000);
        }
    }, [countDown]);

    if (countDown > 0) {
        return <span className="h-48 text-5xl text-center block">{countDown}</span>
    }

    return (
        <div>
            <Result status={status} />
            <div className="flex row justify-around">
                <div className="flex flex-col align-center">
                    <span className="text-3xl text-center pb-5">Player</span>
                    <Choice choice={choice} />
                </div>
                <div className="flex flex-col align-center">
                    <span className="text-3xl text-center pb-5">CPU</span>
                    <Choice choice={cpuAnwser} />
                </div>
            </div>
            <Button status={status} />
        </div>

    )
}

export default PlayModule;