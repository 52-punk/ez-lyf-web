import logo from "./logo.svg";
import "./fontawesome-free-5.15.3-web/css/all.css";
import "./fontawesome-free-5.15.3-web/js/all";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/Landing_page";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/rooms" exact></Route>
        <Route path="/food" exact></Route>
        <Route path="/market" exact></Route>
        <Route path="/notes" exact></Route>
      </Switch>
    </div>
  );
}

export default App;
