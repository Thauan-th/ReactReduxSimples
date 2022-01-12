
import './App.css';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo';
function App() {
  return (
    <div className="App">
      <h1>React-Redux Exercicio[simples]</h1>
      
      <div className='linha'>
      <Intervalo >X</Intervalo>
      </div>
      <div className='linha'>
      <Sorteio/>
      <Media/>
      <Soma/>
      </div>

    </div>
  );
}

export default App;
