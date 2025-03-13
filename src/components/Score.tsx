import useScoreStore from "../store/ScoreStore";

const Score = () => {
    const score = useScoreStore((state) => state.score);
    const maxScore = useScoreStore((state) => state.maxScore);

    return(
        <div className="w-80 m-auto flex justify-around py-12">
            <h2 className="text-2xl">Score: {score}</h2>
            <h2 className="text-2xl">Max Score: {maxScore}</h2>
        </div>
    )
}

export default Score;