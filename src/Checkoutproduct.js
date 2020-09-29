import React from 'react';
import "./Checkoutproduct.css"
import { useStateValue } from './Stateprovider';

function Checkoutproduct({id,image,title,price,rating}) {
    const [{basket}, dispatch] = useStateValue();
    const remove=()=>
    {dispatch({
        type:'REMOVE',
        id: id,
    
    })

    }
    return (
        <div className="checkoutproduct">
<img className="checkoutimg" src={image} alt=""/>
<div className="checkout_info">
    <p className="checkout_title">{title}</p>
    <p className="checkout_price">
        <small>$</small>
        <strong>{price}</strong>
    </p>
    <div className="checkout_rating">
        {Array(rating).fill().map((_,i)=>(
<p>⭐</p>        ))}
    </div>
    <button onClick={remove}>remove</button>
</div>
        </div>
    )
}

export default Checkoutproduct
