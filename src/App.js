
import { BrowserRouter } from "react-router-dom";
import "./assets/css/app.css"
import Main from "./Sections/Main";
import Navigation from "./Sections/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="landing">
          <Navigation />
          <Main />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
