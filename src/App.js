import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button.
    </button>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Welcome to my app</h1>
            <MyButton />
        </div>
      </header>
    </div>
  );
}

export default App;
