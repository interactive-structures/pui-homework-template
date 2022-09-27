import React, { Component } from 'react';
import './App.css';
import Roll from './Roll';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // roll array with six objects--one of each type of cinnamon roll
      rollData: [
        {
          imageURL: "/assets/original-cinnamon-roll.jpg",
          rollName: "Original cinnamon roll",
          rollPrice: 2.49,
          glazingName: "Keep original",
          displayPrice: 2.49,
          elementID: "original_roll"
        },
        {
          imageURL: "/assets/apple-cinnamon-roll.jpg",
          rollName: "Apple cinnamon roll",
          rollPrice: 3.49,
          glazingName: "Keep original",
          displayPrice: 3.49,
          elementID: "apple_roll"
        },
        {
          imageURL: "/assets/raisin-cinnamon-roll.jpg",
          rollName: "Raisin cinnamon roll",
          rollPrice: 2.99,
          glazingName: "Keep original",
          displayPrice: 2.99,
          elementID: "raisin_roll"
        },
        {
          imageURL: "/assets/walnut-cinnamon-roll.jpg",
          rollName: "Walnut cinnamon roll",
          rollPrice: 3.49,
          glazingName: "Keep original",
          displayPrice: 3.49,
          elementID: "walnut_roll"
        },
        {
          imageURL: "/assets/double-chocolate-cinnamon-roll.jpg",
          rollName: "Chocolate cinnamon roll",
          rollPrice: 3.99,
          glazingName: "Keep original",
          displayPrice: 3.99,
          elementID: "choc_roll"
        },
        {
          imageURL: "/assets/strawberry-cinnamon-roll.jpg",
          rollName: "Strawberry cinnamon roll",
          rollPrice: 3.99,
          glazingName: "Keep original",
          displayPrice: 3.99,
          elementID: "strawberry_roll"
        },
      ],
    }
    
    let cartTotal = 0;
    let cartItems = [];

    this.cartTotal = cartTotal;
    this.cartItems = cartItems;
  }

  // function below displays the popup for 3 seconds when the user clicks "Add to Cart" button
  showPopup = (roll) => {
    document.getElementById('PopupText').style.display = 'block';
    document.getElementById('roll-name').textContent = roll.rollName;
    document.getElementById('roll-glazing').textContent = roll.glazingName + " glazing";
    document.getElementById('roll-size').textContent = "Pack of " + roll.packSize;
    document.getElementById('roll-price').textContent = "Price: $" + roll.displayPrice.toFixed(2);
    setTimeout(() => document.getElementById('PopupText').style.display = 'none', 3000);
  }

  // function below displays the cart item and price totals after items are added
  addCartButton = (roll) => {
    this.showPopup(roll);
    this.cartItems.push(roll);
    this.cartTotal += roll.displayPrice;
    if (this.cartItems.length === 1){
      document.querySelector("#item-count").textContent = (this.cartItems.length + " item");
    }
    else{
      document.querySelector("#item-count").textContent = (this.cartItems.length + " items");
    }
    document.getElementById('total-cost').textContent = "Total: $" + this.cartTotal.toFixed(2);
  };

  render() {
    return (
      <div className="App">
        {/* header bar for the Bun Bun Shop webpage */}
        <NavBar 
          logo="/assets/logo-01.svg" 
          cartItems={this.cartItems.length}
          cartTotal= {this.cartTotal} />
  
        <div className="row">
          {/* 3 cinnamon rolls displayed per row, pass in corresponding image, name, price */}
          <Roll 
             imageURL={this.state.rollData[0].imageURL}
             rollName={this.state.rollData[0].rollName}
             rollPrice={this.state.rollData[0].rollPrice}
             glazingName={this.state.rollData[0].glazingName}
             displayPrice={this.state.rollData[0].displayPrice}
             elementID={this.state.rollData[0].elementID} 
             addCart={this.addCartButton} />
          <Roll 
            imageURL={this.state.rollData[1].imageURL}
            rollName={this.state.rollData[1].rollName}
            rollPrice={this.state.rollData[1].rollPrice}
            glazingName={this.state.rollData[1].glazingName}
            displayPrice={this.state.rollData[1].displayPrice}
            elementID={this.state.rollData[1].elementID} 
            addCart={this.addCartButton} />
          <Roll 
            imageURL={this.state.rollData[2].imageURL}
            rollName={this.state.rollData[2].rollName}
            rollPrice={this.state.rollData[2].rollPrice}
            glazingName={this.state.rollData[2].glazingName}
            displayPrice={this.state.rollData[2].displayPrice}
            elementID={this.state.rollData[2].elementID} 
            addCart={this.addCartButton} />
        </div>
  
        <div className="row">
          {/* 3 cinnamon rolls displayed per row, pass in corresponding image, name, price */}
          <Roll 
            imageURL={this.state.rollData[3].imageURL}
            rollName={this.state.rollData[3].rollName}
            rollPrice={this.state.rollData[3].rollPrice}
            glazingName={this.state.rollData[3].glazingName}
            displayPrice={this.state.rollData[3].displayPrice}
            elementID={this.state.rollData[3].elementID} 
            addCart={this.addCartButton} />
          <Roll 
            imageURL={this.state.rollData[4].imageURL}
            rollName={this.state.rollData[4].rollName}
            rollPrice={this.state.rollData[4].rollPrice}
            glazingName={this.state.rollData[4].glazingName}
            displayPrice={this.state.rollData[4].displayPrice}
            elementID={this.state.rollData[4].elementID} 
            addCart={this.addCartButton} />
          <Roll 
            imageURL={this.state.rollData[5].imageURL}
            rollName={this.state.rollData[5].rollName}
            rollPrice={this.state.rollData[5].rollPrice}
            glazingName={this.state.rollData[5].glazingName}
            displayPrice={this.state.rollData[5].displayPrice}
            elementID={this.state.rollData[5].elementID} 
            addCart={this.addCartButton} />
        </div>
      </div>
    );
  }
}

export default App;