import { STATUS } from "../constants/Status";
import { Status } from "../types/status";
interface ResultProps {
    status: Status | null;
}

export const Result: React.FC<ResultProps> = ({ status }) => {
    if (!status) return null;

    const statusStyles = {
        [STATUS.Win]: "text-green-400",
        [STATUS.Lose]: "text-red-400",
        [STATUS.Draw]: "text-yellow-400"
    };

    return (
        <div className="flex justify-center items-center mt-6">
            <span className={`text-5xl font-bold uppercase ${statusStyles[status]}`}>
                {status === STATUS.Win && "You Win!"}
                {status === STATUS.Lose && "You Lose!"}
                {status === STATUS.Draw && "It's a Draw!"}
            </span>
        </div>
    );
};
