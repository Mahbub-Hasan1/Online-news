import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import './App.css';
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import SampadakBani from "./Components/SampadakBani/SampadakBani";
import ContactUs from "./Components/ContactUs/ContactUs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/registration-form">
            <RegistrationForm />
          </Route>
          <Route path="/admin-note">
            <SampadakBani />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route exact path="/">
            <Home />
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
