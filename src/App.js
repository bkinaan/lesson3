import logo from './logo.svg';
import './App.css';
import Why from "./Components/Why";
//import TVBox from './Components/TVBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="brown-text">Hello!</p>
        <Why/>
        {/* <TVBox/> */}

      </header>
    </div>
  );
}

export default App;
