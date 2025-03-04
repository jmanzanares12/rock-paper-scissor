import { Choice } from "../components/Choice";
import { ANSWERS } from "../constants/Answers";
import { STEPS } from "../constants/Steps";
import useGameStore from "../store/GameStore";
import { Answer } from "../types/Answer";

const SelectionModule = () => {

    const [setChoise, setSep] = useGameStore((state) => [state.setChoise, state.setStep]);
    
    const handleClick = (choice: Answer) => {
        setChoise(choice);
        setSep(STEPS.Play);
    }

    return (
        <div className="flex row justify-around">
            {ANSWERS.map((answer) => <Choice choice={answer} onClick={handleClick}/>)}
        </div>
    )
}

export default SelectionModule;