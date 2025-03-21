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
        return <span className="h-48 text-6xl font-bold text-center block py-4">{countDown}</span>
    }

    return (
        <div className="flex flex-col justify-center gap-6 mt-6 px-4">
            <Result status={status} />
            <div className="flex flex-wrap justify-center gap-10">
                <div className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-semibold pb-3">Player</span>
                    <Choice choice={choice} />
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-semibold pb-3">CPU</span>
                    <Choice choice={cpuAnwser} />
                </div>
            </div>
            <Button status={status} />
        </div>
    )
}

export default PlayModule;