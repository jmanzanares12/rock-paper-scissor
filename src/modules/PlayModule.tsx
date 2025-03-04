import useGameStore from "../store/GameStore";
import { Choice } from "../components/Choice";
import usePlayGame from "../hooks/usePlayGame";
import { useEffect } from "react";

const PlayModule = () => {

    const choice = useGameStore((state) => state.choise);
    const { status, cpuAnwser, generateCpuAnswer } = usePlayGame();

    useEffect(() => {
        if (choice) {
            generateCpuAnswer(choice);
        }
    }, [choice, generateCpuAnswer]);

    return (
        <>
            <div className="flex row justify-around">
                <div className="flex col align-center">
                    <span className="text3x1 text-center pb-5">Player</span>
                    <Choice choice={choice} />
                </div>
            </div>

            <div className="flex row justify-around">
                <div className="flex col align-center">
                    <span className="text3x1 text-center pb-5">CPU</span>
                    <Choice choice={cpuAnwser} />
                </div>
            </div>
        </>
    )
}

export default PlayModule;