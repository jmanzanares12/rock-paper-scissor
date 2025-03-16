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
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold pt-12 pb-6 text-center tracking-tight">
        Rock, Paper or Scissor
      </h1>
      <Score />
      {module}
    </div>
  );
}

export default App
