import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
      return (
        <div className="header-bar">
            {/* display store logo */}
            <img className="logo" alt="store-logo" src={this.props.logo} />
            <div className="line"> 
            <div className="header-bar-text">
              {/* sub div with headings for products and cart */}
              <div className="products">
                <span className="highlight">PRODUCTS</span>
              </div>
              <div className="cart">
                <div class = "cart-text" onClick={() => this.props.displayCart()}> CART </div>
                {/* shows the popup message when "add to cart" button is clicked */}
                <div class ="popup" id="PopupText">
                  <div className="small-font"> Added to cart: </div><br/>
                  <div className="small-font bold" id="roll-name"> Raisin cinnamon roll </div>
                  <div className="small-font" id="roll-glazing"> Double chocolate glazing </div>
                  <div className="small-font" id="roll-size"> Pack of 6 </div>
                  <div className="small-font" id="roll-price"> Price: $22.45 </div>
                </div>
              </div>
            </div>

            <hr className="line-weight" />
                <div className="description">
                  Our hand-made cinnamon rolls
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default NavBar