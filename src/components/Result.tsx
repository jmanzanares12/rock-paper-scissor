import { STATUS } from "../constants/Status";
import { Status } from "../types/status";

interface ResultProps {
    status: Status | null;
}

export const Result: React.FC<ResultProps> = ({status}) => {
    if (status === STATUS.Win) {
        return <span className="text-5xl text-center block">You win!</span>;
    } else if (status === STATUS.Lose) {
        return <span className="text-5xl text-center block">You lose!</span>;
    } else if (status === STATUS.Draw) {
        return <span className="text-5xl text-center block">Draw!</span>;
    }
    return null;
}