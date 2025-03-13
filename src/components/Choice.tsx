import { Answer } from "../types/answer";

interface ChoiceProps {
    choice: Answer | null;
    onClick?: (awnser: Answer) => void
}

export const Choice = ({ choice, onClick }: ChoiceProps) => {
    const handleClick = () => (onClick && choice) && onClick(choice);

    return (
        <div className="flex items-center justify-center">
            <button className="px-6 py-4 bg-gray-800 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-gray-700 transition" onClick={handleClick}>
                {choice ?? 'Choose'}
            </button>
        </div>
    )
}

