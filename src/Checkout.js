import React from "react"
import {useStateValue} from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import "./Checkout.css"
import Subtotal from "./Subtotal"

export default function Checkout(){
  const [{basket}]=useStateValue();
  return <div className="checkout">
    <div className="checkout__left">
      <img
        className="checkout__img"
        src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
        alt="Advertisement image"
        />
        {basket.length===0 ?
          (<div>
            <h1>Your Shopping Cart is empty</h1> <br />
            <p> You do not have any items in your basket.
            To add items click "Add To Basket" next to the item.
            </p>
          </div>
          ) : (
          <div >
          <h1 className="checkout__title">Your Shopping Cart</h1>
          {/* List item to be displayed*/}
          {/* Note the below map used to return but here new feature  after item
          () instead of {return <CheckoutComponent />} */ }
            {basket.map((item)=>(
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating} 
            />
            ))}
          </div>
          )
        }
    </div>
    {basket.length>0 &&
    (<div className="checkout__right">
      <Subtotal />
    </div>)}
    </div>

}