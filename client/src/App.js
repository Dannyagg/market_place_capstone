import { Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
