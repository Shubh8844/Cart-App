import React from "react"
import "./Product.css"
import {useStateValue} from "./StateProvider";

{/* object destucting and note that order doesnot matter as we access directly by name of props*/}
export default function Product({id,title,rating,image,price}) {
const [{basket},dispatch]=useStateValue();
const addToBasket= ()=>{
  dispatch({
  type:"ADD_TO_BASKET",
  item:{
    id,title,rating,image,price  //here we can write id:id,titke:title but new way in ES6 
  },
  })
}




  return <div className="product">
    
    <div className="product__info">
    <p className="product__title">{title}</p>
    <p className="product__price">
      <small>$</small>
      <strong>{price}</strong>
    </p>
    <div className="product__rating">
      { Array(rating).fill().map(_ => <p>&#11088;</p>)}
    </div>
    </div>
    
    <img src={image} alt="" />
    <button onClick={addToBasket}>Add to basket </button>
    </div>
}