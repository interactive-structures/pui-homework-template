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
              <div class="cart">
                <div class = "cart-text"> CART </div>
                {/* shows the popup message when "add to cart" button is clicked */}
                <div class ="popup" id="PopupText">
                  <div class="small-font"> Added to cart: </div><br/>
                  <div class="small-font bold" id="roll-name"> Raisin cinnamon roll </div>
                  <div class="small-font" id="roll-glazing"> Double chocolate glazing </div>
                  <div class="small-font" id="roll-size"> Pack of 6 </div>
                  <div class="small-font" id="roll-price"> Price: $22.45 </div>
                </div>
                {/* displays cart item count and cart total--updates dynamically as items are added to cart */}
                <div class="small-font right-align" id="item-count"> 0 items </div>
                <div class="small-font right-align" id="total-cost"> Total: $0 </div>
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