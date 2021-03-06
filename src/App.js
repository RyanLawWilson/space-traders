import './App.css';
import UserNav from './Components/UserNav';
import { useState, useEffect } from 'react';

function App() {

  //const[userCredentials, setUserCredentials] = useState({});
  const[userData, setUserData] = useState({});
  const[token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("ST_UserData") !== null) {
      console.log("Initial Load: There is data in local storage");
      var data = JSON.parse(localStorage.getItem("ST_UserData"));
      setUserData(data);
    } else {
      console.log("Initial Load: There is no data in local storage");
      //setUserData({});
    }
  }, []);


  return (
    <div className="App">
      <UserNav setUserData={setUserData} userData={userData} setToken={setToken} token={token} />
    </div>
  );
}

export default App;
