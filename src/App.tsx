import { useMemo } from "react"
import { STEPS } from "./constants/Steps"
import SelectionModule from "./modules/SelectionModule"
import PlayModule from "./modules/PlayModule"
import useGameStore from "./store/GameStore"
import GameOverModule from "./modules/GameOverModule"
import Score from "./components/Score"

const renderModule = (step: STEPS) => {
  switch (step) {
    case STEPS.Selection:
      return <SelectionModule />
    case STEPS.Play:
      return <PlayModule />
    case STEPS.Result:
      return <GameOverModule />
    default:
      return null;
  }
}

function App() {
  const step = useGameStore((state) => state.step);
  const module = useMemo(() => renderModule(step), [step]);
  return (
    <div className="bg-gray-900 text-white min-h-screen flex-col items-center justify-center space-y-8">
      <h1 className="text-center text-5xl font-extrabold tracking-wider pt-12 pb-12">
        Rock, Paper or Scissor
      </h1>
      <Score />
      {module}
    </div>
  );
}

export default App
