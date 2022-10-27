import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Tablenotes from './components/Tablenotes';
import Login from './components/Login';


function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  const checkUser = async (username) => {
    const res = await fetch(`http://localhost:5500/user/${username}`);
    if(res.status === 200){
      const data = await res.json();
      setUserDetails(data);
    } else {
      alert ("WRONG USERNAME");
    }
  };
  
  return (
    <div>
      <Header showAddForm={() => setShowAddForm(!showAddForm)}/>
      <Login onSubmit={checkUser}/>
    </div>
  );
}
//<Tablenotes showAddForm={showAddForm} setShowAddForm={setShowAddForm}/>
export default App;
