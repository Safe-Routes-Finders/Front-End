import React from 'react';
import Login from "./Components/Forms/SignIn";
import SignUp from "./Components/Forms/SignUp";
import SignedIn from "./Components/SignedIn";



import PrivateRoute from "./Components/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";




function App() {
  return (
    <Router  >
    <div>
      <Route exact path="/" render={(props)=><Login {...props}/>}/>
      <Route path="/SignUp" render={(props)=><SignUp {...props}/>}/>
      <PrivateRoute path="/map" component={SignedIn} />
    </div>
    </Router>
  );
}

export default App;
