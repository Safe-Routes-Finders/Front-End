import React from 'react';
import Login from "./Components/Forms/SignIn";
import {Route} from "react-router-dom";




function App() {
  return (
    <>
      <Route path="/SignIn" render={(props)=><Login {...props}/>}/>
    </>
  );
}

export default App;
