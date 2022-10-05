import React, { Component } from 'react';
import './CartHeader.css';

class CartHeader extends Component {
    render() {
        return (
            <div className="total-header">
                <div className="total-items" id="cart-items"> 
                    Shopping Cart ({this.props.totalItems} items)
                </div>
                <div className="total-price" id="cart-price">
                    Total: ${this.props.totalPrice.toFixed(2)}
                </div>
            </div>
        );
    }
}
  
export default CartHeader