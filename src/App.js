
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/app.css"
import Login from "./Sections/Login";
import Main from "./Sections/Main";
import Navigation from "./Sections/Navigation";



function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
      {
        loggedIn ?
        <div id="landing">
          <Navigation setLoggedIn={(loggedIn)=>setLoggedIn(loggedIn)} />
          <Main />
        </div>
        :
        <Login setLoggedIn={(loggedIn)=>setLoggedIn(loggedIn)}/>
      }
      </BrowserRouter>
    </div>

  );
}

export default App;
