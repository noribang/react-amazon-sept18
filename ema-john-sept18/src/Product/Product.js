import React, { Component } from 'react';
import './Product.css'
import StarRatingComponent from 'react-star-rating-component';



class Product extends Component {
    render() {
        console.log(this.props.product);
        const product = this.props.product;
        const addButton = <button onClick={() => this.props.addToCart(product)}>Add to Cart</button>;
        const removeButton = <button onClick={() => this.props.handleRemoveItem(product)}>Remove Item</button>;
        const btn = (this.props.isReview) ? removeButton : addButton;

        return (
            <div className="product">
                {/* <h4>This is Product</h4> */}
                <div>
                    <img src={product.img} alt=""/>
                </div>
                <div>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                    <StarRatingComponent 
                        name="rate1" 
                        emptyStarColor="lightgray"
                        value={product.rating}
                        />
                    <br/>
                    {/* <button onClick={() => this.props.addToCart(product)}>Add to Cart</button> */}
                    {btn}
                </div>


            </div>
        );
    }
}

export default Product;