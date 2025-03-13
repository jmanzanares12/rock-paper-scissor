import { ANSWERS } from "../constants/Answers";
import { STEPS } from "../constants/Steps";
import useGameStore from "../store/GameStore";
import { Answer } from "../types/answer";

const SelectionModule = () => {

    const setChoice = useGameStore((state) => state.setChoice); 
    const setStep = useGameStore((state) => state.setStep); 

    const handleClick = (choice: Answer) => {
        setChoice(choice);
        setStep(STEPS.Play);
    };


    return (
        <div className="flex justify-center items-center gap-6 mt-10">
            {ANSWERS.map((answer, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(answer)}
                    className="px-6 py-4 bg-gray-800 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-gray-700 transition"
                >
                    {answer}
                </button>
            ))}
        </div>
    )
}

export default SelectionModule;