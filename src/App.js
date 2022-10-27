import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Tablenotes from './components/Tablenotes';


function App() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div>
      <Header showAddForm={() => setShowAddForm(!showAddForm)}/>
      <Tablenotes showAddForm={showAddForm} setShowAddForm={setShowAddForm}/>
    </div>
  );
}

export default App;
