import './App.css'
import { Renderer } from './components/Renderer';
import { Providers } from './components/Providers';
import { useRenderTx } from "@/hooks/useRenderTx";

function App() {
  const renderTx = useRenderTx();

  if (renderTx.state !== 'valid') {
    return (
      <div>
        {renderTx.state}
      </div>
    )
  }

  return (
    <Providers>
      <Renderer
        renderTx={renderTx.txId}
      />
    </Providers>
  )
}

export default App
