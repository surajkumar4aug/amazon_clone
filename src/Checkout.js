import React from 'react'
import "./Checkout.css"
import Checkoutproduct from './Checkoutproduct';
import { useStateValue } from './Stateprovider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        < div className="checkout">
            <div className="checkout_left">
                <img className="checkoutad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Wearables/Mi/Redmi_Band/SaleOn/MI-Xiaomi_redmi_Smart_Band_shop-now_1500x300.jpg" alt=""/>
                <div>
                    <h2 className="checkouttitle">Your shoping Basket</h2>
            {basket.map(item=>(
                <Checkoutproduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
            ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            
            </div>
        </div>
    )
}

export default Checkout;
