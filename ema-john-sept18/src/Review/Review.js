import React, { Component } from 'react';
import './Review.css';
import {getDatabaseCart} from '../utility/local-storage';
import fakeData from '../fakeData/index';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {removeFromDatabaseCart, processOrder} from '../utility/local-storage';
import giphy from '../images/giphy.gif'

class Review extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
            orderPlaced: false
        }
    }
    componentDidMount() {
        const storedCart = getDatabaseCart();
        const savedCart = [];
        for(let id in storedCart) {
            const product = fakeData.find(prd => prd.id === id);
            product.quantity = storedCart[id];
            savedCart.push(product);
        }
        this.setState({cart:savedCart});
        console.log(storedCart);
    }

    handleRemoveItem = (product) => {
        console.log(product);
        const newCart = this.state.cart.filter(prd => prd.id != product.id);
        this.setState({cart:newCart});
        removeFromDatabaseCart(product.id);
        
    }

    placeOrder = () => {
        this.setState({orderPlaced:true, cart:[]});
        processOrder();
    }

    render() {
        let happyImage;
        if(this.state.orderPlaced) {
            happyImage = <img src={giphy}></img>
        }

        return (
            <div className="shop">
                {/* <h1>Review Order</h1> */}
                <div className="product-container">
                    {
                        this.state.cart.map(prd => <Product 
                        key={prd.id}
                        product={prd}
                        handleRemoveItem={this.handleRemoveItem}
                        isReview
                        ></Product>)
                    }
                    {happyImage}
                </div>
                <div className="cart-container">
                    <Cart cart={this.state.cart}>
                        <button onClick={this.placeOrder}>Place Order</button>
                    </Cart>
                </div>
            </div>
        );
    }
}

export default Review;