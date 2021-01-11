import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import './App.css';
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import SampadakBani from "./Components/SampadakBani/SampadakBani";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/registration-form">
            <RegistrationForm />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin-note">
            <SampadakBani />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
