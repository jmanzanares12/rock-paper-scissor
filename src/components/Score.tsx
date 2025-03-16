import useScoreStore from "../store/ScoreStore";

const Score = () => {
    const score = useScoreStore((state) => state.score);
    const maxScore = useScoreStore((state) => state.maxScore);

    return(
        <div className="bg-gray-800 w-full max-w-md text-white text-lg flex justify-between p-4 items-center rounded-xl shadow-md mt-4">
            <h2 className="text-2xl font-semibold">Score: {score}</h2>
            <h2 className="text-2xl font-semibold">Max Score: {maxScore}</h2>
        </div>
    )
}

export default Score;