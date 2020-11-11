import './App.css';
import UrlForm from './components/UrlForm/UrlForm';
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="Logo">
        <Logo />
      </header>
      <UrlForm />
    </div>
  );
}

export default App;
