import './App.css';
import UserNav from './Components/UserNav';
import { useState, useEffect } from 'react';
import LoansDashboard from './Components/LoansDashboard';
import { Container } from 'react-bootstrap';
import * as api from './tools/SpaceTradersFunctions';




import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';





function App() {

  api.ContactAPI("Hello!");

  //const[userCredentials, setUserCredentials] = useState({});
  /**
   * User Data JSON structure:
   * {
        "user": {
          "credits": 0,
          "loans": [{}, {}, ...],
          "ships": [{}, {}, ...],
          "username": "space-trader"
        }
      }
   */
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState("");
  // A panel is the component being displayed in the main screen area.
  // Available panels: Loans, Ships
  const [panel, setPanel] = useState("Ships");



  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);


  useEffect(() => {
    if (localStorage.getItem("ST_UserData") !== null) {
      console.log("App.js | User data in local storage found");
      // Set userData with the data in local storage & set the token.
      setUserData(JSON.parse(localStorage.getItem("ST_UserData")));
      setToken(localStorage.getItem("ST_token"));
    } else {
      console.log("App.js | No user data in local storage");
      //setUserData({});
    }




    // This code goes to the posts reducer.
    dispatch(getPosts());






  }, [dispatch, currentId]);

  // Show different panels based on what is clicked in the navbar
  function determineDisplayPanel() {
    switch (panel) {
      case "Loans":
        return (<LoansDashboard token={token} userData={userData} setUserData={setUserData} />);
      default:
        return (<div>TEMP</div>); // Show the ships panel by default
    }
  }











  const testAPIHandler = async () => {
    let userInfo = await api.createAccount(`apple_sauce${Math.floor(Math.random() * 10000)}`);
    console.log(userInfo.data);
    // "67f8f83b-752c-4e6f-8596-4ce9ff708329"
  }

  const test2 = async () => {
      let loans = await api.getAvailableLoans("67f8f83b-752c-4e6f-8596-4ce9ff708329");
      console.log(loans.data.loans[0]);
  }

  const takeOut = async () => {
    let result = await api.takeOutLoan("67f8f83b-752c-4e6f-8596-4ce9ff708329", "STARTUP");
    console.log(result.data);
  }

  return (
    <BrowserRouter>
      <div className="App">


        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Switch>


        <button onClick={testAPIHandler}>Create Me</button>
        <button onClick={test2}>Get loans</button>
        <button onClick={takeOut}>Take out loan</button>






















        <UserNav setUserData={setUserData} userData={userData} setToken={setToken} token={token} setPanel={setPanel} />
        <Container>
          {determineDisplayPanel()}
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
