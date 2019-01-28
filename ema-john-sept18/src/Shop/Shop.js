import React, { Component } from 'react';
import fakeData from '../fakeData/index';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import {addToDatabaseCart} from '../utility/local-storage';

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            products:[],
            cart:[]
        }
    }
    
    // Get data from outside.
    componentDidMount() {
        const first10 = fakeData.slice(0, 10);
        this.setState({products:first10});
        console.log(first10);
    }
    
    handleAddToCart = (product) => {
        // console.log("clicked");
        // console.log(product);
        const newCart = [...this.state.cart, product];
        this.setState({cart:newCart});
        const quantity = newCart.filter(prd => prd.id === product.id).length;

        addToDatabaseCart(product.id, quantity);
    }

    render() {
        return (
            <div className="shop">
                <div className="product-container">
                    <h1>Buy whatever you want...</h1>
                        {
                            //{/* this.state.products.map(prd => <li key={prd.id}>{prd.name}</li>) */}
                            this.state.products.map(prd => <Product 
                                product={prd} 
                                addToCart={this.handleAddToCart}
                                key={prd.id}></Product>)
                        }
                </div>
                <div className="cart-container">
                    {/* <h4>Order Summary</h4>
                    <p>Items Ordered: {this.state.cart.length}</p> */}
                    <Cart cart={this.state.cart}></Cart>
                </div>
                
            </div>
        );
    }
}

export default Shop;