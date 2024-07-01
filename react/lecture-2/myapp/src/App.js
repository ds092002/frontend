import './App.css';
// import Header from './components/Header';
import {Header, name} from './components/Header';


function App() {
  return (
    <div className="App">
    <Header />
      <h1>Hello World!</h1>
      <h1>My Name is {name}</h1>
    </div>
  );
}

export default App;
