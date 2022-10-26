import '../src/css/App.css';
import Loading from './components/Loading';
import Login from './components/Login';
import Avion from './pages/Avion';

function App() {
  return (
    <div className="App">
      <Loading>
        <Login>
          <Avion />
        </Login>
      </Loading>
    </div>
  );
}

export default App;
