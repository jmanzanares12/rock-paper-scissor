import {STEPS} from "../constants/Steps";
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
        <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800
            text-white font-seibold text-lg trasnsition-all duration-300 shadow-lg
            hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={handleClick}>
            Play again
        </button>
    )
}

export default GameOverModule;