import useGameStore from "../store/GameStore";
import { Choice } from "../components/Choice";
import usePlayGame from "../hooks/usePlayGame";
import { useEffect } from "react";

const PlayModule = () => {

    const choice = useGameStore((state) => state.choice);
    const { status, cpuAnwser, generateCpuAnswer } = usePlayGame();

    useEffect(() => {
        if (choice) {
            generateCpuAnswer(choice);
        }
    }, [choice, generateCpuAnswer]);

    return (
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
    )
}

export default PlayModule;