import { Status } from "../types/status";
import useGameStore from "../store/GameStore";
import { STEPS } from "../constants/Steps";
import useScoreStore from "../store/ScoreStore";
import { STATUS } from "../constants/Status";

interface ButtonProps {
    status: Status | null;
}

const Button: React.FC<ButtonProps> = ({ status }) => {
    const setStep = useGameStore((state) => state.setStep);
    const increaseScore = useScoreStore(state => state.increaseScore)

    const handleClick = () => {
        switch (status) {
            case STATUS.Win:
                increaseScore();
                setStep(STEPS.Selection)
                break;
            case STATUS.Lose:
                setStep(STEPS.Result)
                break;
            case STATUS.Draw:
                setStep(STEPS.Selection)
                break;
            default:
                break;
        }
    }

    return (
        <div className="flex justify-center mt-6">
            <button
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700
                text-white font-semibold text-lg transition duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={handleClick}>
                Continue
            </button>
        </div>
    )
}

export default Button;