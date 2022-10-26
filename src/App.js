import './App.css';
import Header from './components/Header';
import Tablenotes from './components/Tablenotes';
import AddNote from './components/AddNote';

function App() {
  return (
    <div>
      <Header />
      <AddNote />
      <Tablenotes />
    </div>
  );
}

export default App;
