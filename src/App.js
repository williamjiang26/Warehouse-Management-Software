import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./home"



function App() {
  return (
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/about" render={() => <About></About>} />
      <Route path="/inventory" children={() => <Inventory></Inventory>} />
      <Route path="/contact" children={() => <Contact></Contact>} />
    </Routes>
    
  );
}

export default App;
