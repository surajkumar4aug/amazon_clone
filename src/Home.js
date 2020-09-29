import React from 'react'
import "./Home.css"
import Product from "./Product";
function Home() {
    return (
        <div className="Home">
<div className="Homecontain">
    <img className="HomeImage" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg" alt=""/>
<div className="Homerow">
<Product id="123" title="Hp Laptop 44ut-56" rs="$" rating={4} image="https://static.lenovo.com/ww/events/ces/2020/img/gallery/lenovo-ces2020-productpage-product-gallery-lavie-vega-2.png" price={55}/>
<Product id="124"  title="Hp Laptop 44ut-56" rs="$" rating={4} image="https://static.lenovo.com/ww/events/ces/2020/img/gallery/lenovo-ces2020-productpage-product-gallery-lavie-vega-2.png" price={55}/>
</div>
<div className="Homerow">
<Product id="125"  title="Hp Laptop 44ut-56" rs="$" rating={4} image="https://static.lenovo.com/ww/events/ces/2020/img/gallery/lenovo-ces2020-productpage-product-gallery-lavie-vega-2.png" price={55}/>
<Product id="126"  title="Hp Laptop 44ut-56" rs="$" rating={4} image="https://static.lenovo.com/ww/events/ces/2020/img/gallery/lenovo-ces2020-productpage-product-gallery-lavie-vega-2.png" price={55}/>
<Product id="127" title="Hp Laptop 44ut-56" rs="$" rating={4} image="https://static.lenovo.com/ww/events/ces/2020/img/gallery/lenovo-ces2020-productpage-product-gallery-lavie-vega-2.png" price={55}/>

</div>
<div className="Homerow">
<Product id="128" title="Hp Laptop 44ut-56" rs="$" rating={4} image="https://static.lenovo.com/ww/events/ces/2020/img/gallery/lenovo-ces2020-productpage-product-gallery-lavie-vega-2.png" price={55}/>
</div>

</div>
        </div>
    )
}

export default Home
