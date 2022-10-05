import React, { Component } from 'react';
import './CartHeader.css';

class CartHeader extends Component {
    render() {
        return (
            <div className="total-header">

                <div className="total-items" id="total-items"> 
                    Shopping Cart ({this.props.totalItems} items)
                </div>
                <div className="total-price" id="total-price">
                    Total: ${this.props.totalPrice}
                </div>
            </div>
        );
    }
}
  
export default CartHeader