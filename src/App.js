import './App.css';
import UserNav from './Components/UserNav';
import { useState, useEffect } from 'react';
import LoansDashboard from './Components/LoansDashboard';
import { Container } from 'react-bootstrap';
import ContactAPI from './tools/SpaceTradersFunctions';





import Form from './Components/Form/Form';
import Posts from './Components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';






function App() {

  ContactAPI("Hello!");

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
    switch(panel) {
      case "Loans":
        return(<LoansDashboard token={token} userData={userData} setUserData={setUserData} />);
      default:
        return(<div>TEMP</div>); // Show the ships panel by default
    }
  }











  

  return (
    <div className="App">


      
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Posts setCurrentId={setCurrentId} />


























      <UserNav setUserData={setUserData} userData={userData} setToken={setToken} token={token} setPanel={setPanel} />
      <Container>
        {determineDisplayPanel()}
      </Container>
    </div>
  );
}

export default App;
