import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Tablenotes from './components/Tablenotes';
import Login from './components/Login';


function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  console.log(userDetails);

  const checkUser = async (username) => {
    const res = await fetch(`http://localhost:5500/user/${username}`);
    if(res.status === 200){
      const data = await res.json();
      setUserDetails(data);
      alert("Login Sucessfull")
    } else {
      console.log("WRONG USERNAME");
    }
  };

  

  return (
    <div>
      <Header showAddForm={() => setShowAddForm(!showAddForm)}/>
      {userDetails.username
      ? <Tablenotes showAddForm={showAddForm} setShowAddForm={setShowAddForm}/>
      : <Login onSubmit={checkUser}/>
      }
    </div>
  );
}
// <Login onSubmit={checkUser}/>
//<Tablenotes showAddForm={showAddForm} setShowAddForm={setShowAddForm}/>
export default App;
