import logo from './logo.svg';
import './App.css';
import UrlForm from './UrlForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UrlForm />
    </div>
  );
}

export default App;
