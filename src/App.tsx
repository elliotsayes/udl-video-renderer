import './App.css'
import { Renderer } from './components/Renderer';
import { Providers } from './components/Providers';

function App() {
  return (
    <Providers>
      <Renderer />
    </Providers>
  )
}

export default App
