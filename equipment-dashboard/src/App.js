import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./views/Home";
import Navbar from "./shared/navbar"
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
