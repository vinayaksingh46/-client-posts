import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import Navbar from "./Components/Navbar/Navbar";
import { Container} from "@material-ui/core";
import {BrowserRouter,Switch,Route} from 'react-router-dom'


function App() {
 

  return (
    <BrowserRouter>
    <Container maxWidth="lg">
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path ="/Auth" component={Auth}/>
    </Switch>
         
    </Container>
    </BrowserRouter>
  );
}

export default App;
