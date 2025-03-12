import { Answer } from "../types/answer";

interface ChoiceProps {
    choice: Answer | null;
    onClick?: (awnser: Answer) => void
}

export const Choice = ({ choice, onClick }: ChoiceProps) => {
    const handleClick = () => (onClick && choice) && onClick(choice);
    
    return (
        <div className="rounded-full text-9xl">
            <button className="bg-gray-400 hover:bg-gray-600 rounded-full shadow-lg h-48 w-48" onClick={handleClick}>
                {choice ?? 'Choose'}
            </button>
        </div>
    )
}

