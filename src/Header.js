import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"

export default function Header() {
  //return state and dispatch and destructure state has basket so here we need basket only
  //const [{basket},dispatch]=useStateValue();
  const [{basket,user}]=useStateValue();

  const login=()=>{
    if(user){
      auth.signOut();
    }
  }
  
  return <nav className="header">
    <Link to="/login">
    <img className="header__img"
    src="https://50xgkfsltn425e6xcp9wmy9m-wpengine.netdna-ssl.com/wp-content/uploads/sites/33/2014/12/amazon-logo-a-smile-black.png"
    alt="Image Logo"
    />
    </Link>
    <div className="header__search">
      <input type="text" className="header__searchInput"/>
      <SearchIcon className="header__searchIcon" />
    </div>

    {/*Link for div */}
    <div className="header__nav">
      {/*1st Link*/}
      <Link to={!user && "/login"} className="header__link">
        <div onClick={login} className="header__options">  
        <span className="header__optionsLineOne">Hello {user? user.email :" "}</span>
        <span className="header__optionsLineTwo">{user ?"SignOut":"Signin"}</span>
        </div>
      </Link>
      {/*2nd Link*/}
      <Link to={!user && "/login"} className="header__link">
        <div className="header__options">  
        <span className="header__optionsLineOne">Return</span>
        <span className="header__optionsLineTwo">Order</span>
        </div>
      </Link>
     
      {/*4thLink*/}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBaskets">
          {/* Shopping basket icon*/}  
        <ShoppingBasketIcon />
        {/* Shopping basket number*/}
        <span className="header__optionsLineTwo header__basketCount">{basket.length}</span>
        </div>
      </Link>
    </div>
    
    </nav>
    
  
}
