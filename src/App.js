import React,{useEffect} from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import Login from "./Login"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"



export default function App() {
  const [{user},dispatch]=useStateValue();
//useEffect here if in second argument we specify then it loads every time when things in second argumnet chage
//peice of code that is going to change on given condition
useEffect(()=>{
const unsubscribe=auth.onAuthStateChanged((authUser)=>{
if (authUser){
  // the user logged in
  dispatch({type:"SET_USER",user:authUser});
}
else{
// the user is logged out
  dispatch({type:"SET_USER",user:null});
}
}
);
  return ()=>{
// useEffect return something used for CleanUp unset timer,clearInterval when
 //App re-render than deattch the listner and then attach it again
    unsubscribe(); 
  }
},[])
console.log("User is --->",user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
