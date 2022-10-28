import { getCookie,setCookie } from './helpers/cookies';

import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Tablenotes from './components/Tablenotes';
import Login from './components/Login';


function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [isLoggedOn, setIsLoggedOn] = useState(false);




  const checkUser = async (username) => {
    const res = await fetch(`http://localhost:5500/user/${username}`);
    if(res.status === 200){
      const data = await res.json();
      setUserDetails(data);
      alert("Login Sucessfull")
      setIsLoggedOn(true);
      
      const cookieData = {};
      cookieData.id = data.id;
      cookieData.username = data.username;
      cookieData.password = data.password;

      let cookieStringData = JSON.stringify(cookieData);
      setCookie("user", cookieStringData, 2);
    } else {
      console.log("WRONG USERNAME");
    }
  };

  const logoutHandler = () => {
    setUserDetails({});
    setIsLoggedOn(false);
  }

  

  return (
    <div>
      <Header showAddForm={() => setShowAddForm(!showAddForm)} logged={isLoggedOn} logout={logoutHandler}/>
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
