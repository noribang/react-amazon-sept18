import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
    render() {
        const cart = this.props.cart;
        const totalPrice = cart.reduce((total, prd) => total+prd.price, 0);

        return (
            <div>
                <h4>Order Summary</h4>
                {/* <p>Items Ordered: {this.state.cart.length}</p> */}
                <p>Items Ordered: {this.props.cart.length}</p>
                <p>Total Price: {totalPrice.toFixed(2)}</p>
                <br/>
                {this.props.children}
            </div>
        );
    }
}

export default Cart;