import React from 'react'
import './Product.css'


function Product(props) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{props.title}</p>
                <p className="product_price">
                    <small>&#x20B9;</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product_rating">
                    {Array(props.rating)
                    .fill()
                    .map((_) => (<p>*</p>))}
                </div>


            </div>



            <img src={props.image} alt=""/>
            <button>Add to Bag <i class="fa fa-shopping-bag" aria-hidden="true"></i></button>
        </div>
    )
}

export default Product
