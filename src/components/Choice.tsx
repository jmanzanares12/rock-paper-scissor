import { Answer } from "../types/answer";

interface ChoiceProps {
    choice: Answer | null;
    onClick?: (awnser: Answer) => void
}

export const Choice = ({ choice, onClick }: ChoiceProps) => {
    const handleClick = () => (onClick && choice) && onClick(choice);

    return (
        <div className="flex items-center justify-center">
            <button className="px-6 py-4 bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-white text-xl font-medium rounded-xl shadow hover:shadow-lg transition-transform duration-300 transform hover:scale-105" onClick={handleClick}>
                {choice ?? 'Choose'}
            </button>
        </div>
    )
}

