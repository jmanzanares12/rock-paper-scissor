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
        <button
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800
            text-white font-seibold text-lg trasnsition-all duration-300 shadow-lg
            hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 block"
            onClick={handleClick}>
            Continue
        </button>
    )
}

export default Button;