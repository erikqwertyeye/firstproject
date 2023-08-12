import logo from './logo.svg';
import './App.css';
import { Input } from './components/input/input';

function App() {
  return (
    <div className="App">
      <Input tip="number" placeholder="phone" value="5" />
      <Input tip="string" placeholder="name"/>
    </div>
  );
}

export default App;
