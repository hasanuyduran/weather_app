import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routers from './Routers';

function App() {
  return (
    <BrowserRouter>  {/* BrowserRouter burada, yalnızca bir kere olmalı */}
      <Routers />
    </BrowserRouter>
  );
}

export default App;
