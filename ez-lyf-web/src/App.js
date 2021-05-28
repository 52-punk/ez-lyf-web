import "./fontawesome-free-5.15.3-web/css/all.css";
import "./fontawesome-free-5.15.3-web/js/all";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/Landing_page";
import Room from "./pages/Room";

import AddRoom from "./components/Rooms/AddRoom";
import Loading from "./ui/Loading";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/rooms" exact>
          <Room />
        </Route>
        <Route path="/food" exact>
          <Loading />
        </Route>
        <Route path="/market" exact></Route>
        <Route path="/notes" exact></Route>
        <Route path="/add-room" exact>
          <AddRoom />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
