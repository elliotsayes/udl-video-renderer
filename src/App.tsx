import './App.css'
import { Renderer } from './components/Renderer';
import { Providers } from './components/Providers';
import { RenderTxLoader } from './components/RenderTxLoader';
import { RenderTxFallback } from './components/RenderTxFallback';

function App() {
  return (
    <Providers>
      <RenderTxLoader
        fallbackComponent={RenderTxFallback}
      >
        <Renderer />
      </RenderTxLoader>
    </Providers>
  )
}

export default App
