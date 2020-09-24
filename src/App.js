import React, { createContext,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './componentes/Header/Header';
import Book from './componentes/Book/Book';
import PrivateRoute from './componentes/PrivateRoute/PrivateRoute';
import HotelInfo from './componentes/HotelInfo/HotelInfo';
import OtherAuth from './componentes/OtherAuth/OtherAuth';


 export const userContext =createContext(); 

function App() {
  const [user,setUser] = useState({
    
    isSignedIn:false,
    name:"",
    email:"",
    ConfirmPassword: "",
    photoURL: "",
    error: "",
    success: false,
    LoggedInUser: true,
    newUser: false
  })
  
  
  return (
    <userContext.Provider value ={[user,setUser]}>
    <Router>
     <Switch>
      <Route path="/home">
      <Header/>
      </Route>
      <Route path="/login">
      <OtherAuth></OtherAuth>
      </Route>
      <Route path="/book">
       <Book></Book>
      </Route>
      <Route exact path="/">
      <Header/>
      </Route>
      <PrivateRoute  path="hotelInfo">
        <HotelInfo/>
      </PrivateRoute>
    </Switch>
  </Router>

  </userContext.Provider>
  );
}

export default App;
