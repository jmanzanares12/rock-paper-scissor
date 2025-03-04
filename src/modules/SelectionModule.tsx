import { Choice } from "../components/Choice";
import { ANSWERS } from "../constants/Answers";
import { Answer } from "../types/Answer";

const SelectionModule = () => {
    
    const handleClick = (choice: Answer) => {
        console.log(choice);
    }

    return (
        <div className="flex row justify-around">
            {ANSWERS.map((answer) => <Choice choice={answer} onClick={handleClick}/>)}
        </div>
    )
}

export default SelectionModule;