import { STEPS } from "../constants/Steps";
import useGameStore from "../store/GameStore";
import useScoreStore from "../store/ScoreStore";

const GameOverModule = () => {
    const setStep = useGameStore((state) => state.setStep);
    const resetScore = useScoreStore(state => state.resetScore);

    const handleClick = () => {
        setStep(STEPS.Selection);
        resetScore();
    }

    return (
        <div className="flex flex-col items-center gap-4 text-center mt-10">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold">Game Over</h2>
            <button className="px-6 py-3 w-full sm:w-auto rounded-xl bg-red-600 hover:bg-red-500 active:bg-red-700
                text-white font-semibold text-lg transition duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={handleClick}>
                Play again
            </button>
        </div>

    )
}

export default GameOverModule;