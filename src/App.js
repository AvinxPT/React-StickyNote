import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Tablenotes from './components/Tablenotes';
import Login from './components/Login';


function App() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div>
      <Header showAddForm={() => setShowAddForm(!showAddForm)}/>
      <Login />
    </div>
  );
}
//<Tablenotes showAddForm={showAddForm} setShowAddForm={setShowAddForm}/>
export default App;
