import React from 'react';
import Login from "./Components/Forms/SignIn";
import {Route} from "react-router-dom";
import SignUp from "./Components/Forms/SignUp"




function App() {
  return (
    <>
      <Route path="/SignIn" render={(props)=><Login {...props}/>}/>
      <Route path="/SignUp" render={(props)=><SignUp {...props}/>}/>
    </>
  );
}

export default App;
