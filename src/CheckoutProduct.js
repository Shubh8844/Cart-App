import React from "react"
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider"

export default function CheckoutProduct({id,title,image,rating,price}){
  const [{basket},dispatch]=useStateValue();
  const removeFromBasket=()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    });
    
  }
  return <div className="checkoutProduct">
    <img className="checkoutProduct__img" src={image}
    alt="checkoutProduct" />
    <div className="checkoutProduct__info">
      <p className="checkoutProduct__title">{title}</p>
      <p className="checkoutProduct">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="checkoutProduct__rating">
        {Array(rating).fill().map(_=><p>&#11088;</p>) }
      </div>
      <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove from Basket</button>
    </div>
          
    </div>
} 