import useScoreStore from "../store/ScoreStore";

const Score = () => {
    const score = useScoreStore((state) => state.score);
    const maxScore = useScoreStore((state) => state.maxScore);

    return(
        <div className="bg-gray-800 w-full mx-w-xs sm:max-w-sm mx-auto text-white text-lg flex justify-between p-6 py-4 items-center rounded-lg md:text-xl">
            <h2 className="text-3xl font-bold">Score: {score}</h2>
            <h2 className="text-3xl font-bold">Max Score: {maxScore}</h2>
        </div>
    )
}

export default Score;