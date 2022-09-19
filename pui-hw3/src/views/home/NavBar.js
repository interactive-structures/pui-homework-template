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
              <div className="cart">CART</div>
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