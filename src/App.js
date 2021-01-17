import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import './App.css';
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import SampadakBani from "./Components/SampadakBani/SampadakBani";
import ContactUs from "./Components/ContactUs/ContactUs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import SavapatiBani from "./Components/SavapatiBani/SavapatiBani";


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [adminData, setAdminData] = useState();


  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, adminData, setAdminData }}>
      <div>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/registration-form">
              <RegistrationForm />
            </Route>
            <Route path="/sampadak-note">
              <SampadakBani />
            </Route>
            <Route path="/savapati-note">
              <SavapatiBani/>
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
    </UserContext.Provider>
  );
}

export default App;
