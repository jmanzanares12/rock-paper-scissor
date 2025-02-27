import './App.css'
import { Message } from './Message'

const App = () => {
  return(
    <div>
      <h1>Rock Paper Scissor</h1>
      <p>Choose your weapon</p>
      <Message messageA="You chose Rock" messageB="You chose Paper" />
    </div>
  )
}

export default App 