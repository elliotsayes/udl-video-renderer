import './index.css'
import { Providers } from './components/provider/Providers';
import { RenderTxLoader } from './components/RenderTxLoader';

function App() {
  return (
    <Providers>
      <RenderTxLoader />
    </Providers>
  )
}

export default App
