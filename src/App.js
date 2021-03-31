import './App.css';
import UserNav from './Components/UserNav';
import { useState, useEffect } from 'react';
import LoansDashboard from './Components/LoansDashboard';
import { Container } from 'react-bootstrap';

function App() {

  //const[userCredentials, setUserCredentials] = useState({});
  /**
   * User Data JSON structure:
   * {
        "user": {
          "credits": 0,
          "loans": [],
          "ships": [],
          "username": "space-trader"
        }
      }
   */
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState("");
  // A panel is the component being displayed in the main screen area.
  // Available panels: Loans, Ships
  const [panel, setPanel] = useState("Ships");

  useEffect(() => {
    if (localStorage.getItem("ST_UserData") !== null) {
      console.log("Initial Load: There is data in local storage");
      var data = JSON.parse(localStorage.getItem("ST_UserData"));
      setUserData(data);
      setToken(localStorage.getItem("ST_token"));
    } else {
      console.log("Initial Load: There is no data in local storage");
      //setUserData({});
    }
  }, []);

  // Show different panels based on what is clicked in the navbar
  function determineDisplayPanel() {
    switch(panel) {
      case "Loans":
        return(<LoansDashboard token={token} userData={userData} setUserData={setUserData} />);
      default:
        return(<div>TEMP</div>); // Show the ships panel by default
    }
  }

  return (
    <div className="App">
      <UserNav setUserData={setUserData} userData={userData} setToken={setToken} token={token} setPanel={setPanel} />
      <Container>
        {determineDisplayPanel()}
      </Container>
    </div>
  );
}

export default App;
