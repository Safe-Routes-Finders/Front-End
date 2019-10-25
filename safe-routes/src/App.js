import React from 'react';
import SignIn from "./Components/Forms/SignIn.js"
import SignUp from "./Components/Forms/SignUp.js"
import SignedIn from "./Components/SignedIn"



import PrivateRoute from "./Components/PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";




function App() {
  return (
    <Router  >
    <div>
      <Route exact path="/" render={(props)=><SignIn {...props}/>}/>
      <Route path="/SignUp" render={(props)=><SignUp {...props}/>}/>
      <PrivateRoute path="/map" component={SignedIn} />
    </div>
    </Router>
  );
}

export default App;
