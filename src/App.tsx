import { useMemo } from "react"
import { STEPS } from "./constants/Steps"
import SelectionModule from "./modules/SelectionModule"
import PlayModule from "./modules/PlayModule"
import useGameStore from "./store/GameStore"

const renderModule = (step: STEPS) => {
  switch (step) {
    case STEPS.Selection:
      return <SelectionModule />
    case STEPS.Play:
      return <PlayModule />
    case STEPS.Result:
      return <div>Result</div>
    default:
      return null;
  }
} 

function App() {
  const step = useGameStore((state) => state.step);
  const module = useMemo(() => renderModule(step), [step]);

  return (
    <>
      {module}
    </>
  )
}

export default App
