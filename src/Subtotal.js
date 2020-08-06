import React from "react"
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import {getBasketTotal} from "./reducer"
import {useStateValue} from "./StateProvider"


export default function Subtotal()
{ const [{basket},dispatch]=useStateValue();
  console.log("Hi");
  console.log(basket);
  console.log(getBasketTotal(basket))
  return <div className="subTotal">
    {/*Proice */}
    <CurrencyFormat
      renderText={(value)=>(
        <>
        <p> 
          SubTotal ({basket.length} items) :<strong>{value}</strong>
        </p>
          <small className="subTotal__gift">
          <input type="checkbox" />This order contains gift
          </small>
        
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeperator={true}
      prefix={"$"}
    />
    <button>Proceed To CheckOut</button>
    </div>
}