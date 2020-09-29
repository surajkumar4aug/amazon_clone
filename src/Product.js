import React from 'react'
import "./Product.css";
import {useStateValue} from "./Stateprovider";
function Product({id,title,image,price,rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addproduct=()=>
    {dispatch({
        type:'ADD',
        item:
        {
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,
        },
    });

    };
    return (


        <div  className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="productprice">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="productrating">
    {Array(rating).fill().map((_,i)=>(<p>⭐</p>))}
            
            </div>
            </div>
            <img src={image} alt=""/>
       <button onClick={addproduct}>Add to cart</button>
        </div>
    );
}

export default Product
