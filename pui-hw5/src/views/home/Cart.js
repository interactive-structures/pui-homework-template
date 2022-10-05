import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
    render() {
        return (
            <div className="cart-item">
                {/* displays cinnamon roll image along with name */}
                <img className="cart-image" alt="cinnamon roll" src={this.props.imageURL} />
                <div className="cart-des">
                    <p className="des">{this.props.rollName}</p>
                    <p className="des">Glazing: {this.props.glazingName}</p>
                    <p className="des">Pack size: {this.props.packSize}</p>
                    <p className="des bold">${this.props.displayPrice.toFixed(2)}</p>
                    <button className="des button-cart" type="button" onClick={() => this.props.removeRoll(this.props.elementID)}>Remove</button>
                </div>
                
            </div>
        );
    }
}
  
export default Cart