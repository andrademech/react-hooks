import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  // componentDidUpdate => execulta toda vez que o component atualiza

  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount => execulta 1 x
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  // Com dependência => execulta toda vez que a dependência mudar
  useEffect(() => {
    console.log('Contador mudou para: ', counter);
  }, [counter]);

  const handleClick = () => {
    setReverse((reverse) => !reverse);
  };

  const handleIncrement = () => {
    setCounter((c) => c + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Counter: {counter}</h1>

        <button type="button" onClick={handleIncrement}>
          Increment {counter}
        </button>
        <br />

        <button type="button" onClick={handleClick}>
          Reverse {reverseClass}
        </button>
      </header>
    </div>
  );
}

export default App;
