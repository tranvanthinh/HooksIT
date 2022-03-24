import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import Form from './views/Form'

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Hooks</p>
        <Form />
      </header>
    </div>
  );
}

export default App;
