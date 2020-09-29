import React from 'react'
import CurrencyFormat from "react-currency-format";
import { getBasket } from './Reducer';
import { useStateValue } from './Stateprovider';
import "./Subtotal.css";
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value)=>(
             <>   <p>Subtotal({basket.length} items):<strong>{value}</strong></p>
           <small className="subtotal_gift">
               <input type="checkbox"/>this order contain a gift
           </small>
</>
            )}
            decimalScale={2}
            value={getBasket(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button>paymant</button>
        </div>
    )
}

export default Subtotal
