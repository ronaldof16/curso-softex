
import './App.css'
import Primeiro from './componetes/Primeiro'
import Segundo from './componetes/Segundo'
import Terceiro from './componetes/Terceiro'
import { usePagina2Context } from './hooks/usePagina2Context'

function App() {
  const [state, dispatch] = usePagina2Context()

  return (
    <>
      <h1>Context API2</h1>
      {state.gameState === "ONE" && <Primeiro />}
      {state.gameState === "TWO" && <Segundo />}
      {state.gameState === "THREE" && <Terceiro />}
    </>
  )
}

export default App
