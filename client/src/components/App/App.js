import './App.css';
import UrlForm from '../UrlForm/UrlForm';
import Logo from '../Logo/Logo';

const App = () => {
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
