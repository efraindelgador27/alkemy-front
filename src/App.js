import React from 'react'
import './App.css';
import { Route } from "react-router-dom";
import Abm from './components/Records';
import Home from './components/Home';
import {Nav} from "./components/Nav";
import Sigin from './components/sigin';
import Login from './components/login';
import  NewRecord from './components/Records/newRecord'
import EditRecord from './components/Records/editRecord';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Home} />  
      <Route exact path="/records/:id" component={Abm} /> 
      <Route exact path="/newRecord" component={NewRecord}/>
      
      <Route exact path="/editRecord/:id" component={EditRecord} />  
      
      <Route exact path="/sigin" component={Sigin} />  
      <Route exact path="/login" component={Login} />  
    </div>
  );
}

export default App;
