import useScoreStore from "../store/ScoreStore";

const Score = () => {
    const score = useScoreStore((state) => state.score);
    const maxScore = useScoreStore((state) => state.maxScore);

    return(
        <div className="w-96 mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-lg flex justify-between items-center">
            <h2 className="text-3xl font-bold">Score: {score}</h2>
            <h2 className="text-3xl font-bold">Max Score: {maxScore}</h2>
        </div>
    )
}

export default Score;