import React, { Component } from 'react';
import './App.css';
import Roll from './Roll';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollData: [
        {
          imageURL: "/assets/original-cinnamon-roll.jpg",
          rollName: "Original cinnamon roll",
          rollType: "original",
          rollPrice: 2.49,
          glazingName: "Keep original",
          packMultiplier: 1,
          packSize: 1,
          displayPrice: 2.49,
          elementID: "original_roll"
        },
        {
          imageURL: "/assets/apple-cinnamon-roll.jpg",
          rollName: "Apple cinnamon roll",
          rollType: "apple",
          rollPrice: 3.49,
          glazingName: "Keep original",
          packMultiplier: 1,
          packSize: 1,
          displayPrice: 3.49,
          elementID: "apple_roll"
        },
        {
          imageURL: "/assets/raisin-cinnamon-roll.jpg",
          rollName: "Raisin cinnamon roll",
          rollType: "raisin",
          rollPrice: 2.99,
          glazingName: "Keep original",
          packMultiplier: 1,
          packSize: 1,
          displayPrice: 2.99,
          elementID: "raisin_roll"
        },
        {
          imageURL: "/assets/walnut-cinnamon-roll.jpg",
          rollName: "Walnut cinnamon roll",
          rollType: "walnut",
          rollPrice: 3.49,
          glazingName: "Keep original",
          packMultiplier: 1,
          packSize: 1,
          displayPrice: 3.49,
          elementID: "walnut_roll"
        },
        {
          imageURL: "/assets/double-chocolate-cinnamon-roll.jpg",
          rollName: "Chocolate cinnamon roll",
          rollType: "choc",
          rollPrice: 3.99,
          glazingName: "Keep original",
          packMultiplier: 1,
          packSize: 1,
          displayPrice: 3.99,
          elementID: "choc_roll"
        },
        {
          imageURL: "/assets/strawberry-cinnamon-roll.jpg",
          rollName: "Strawberry cinnamon roll",
          rollType: "strawberry",
          rollPrice: 3.99,
          glazingName: "Keep original",
          packMultiplier: 1,
          packSize: 1,
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

  showPopup = (roll) => {
    document.getElementById('PopupText').style.display = 'block';
    document.getElementById('roll-name').textContent = roll.rollName;
    document.getElementById('roll-glazing').textContent = roll.glazingName + " glazing";
    document.getElementById('roll-size').textContent = "Pack of " + roll.packSize;
    document.getElementById('roll-price').textContent = "Price: $" + roll.displayPrice.toFixed(2);
    setTimeout(() => document.getElementById('PopupText').style.display = 'none', 3000);
  }

  addCartButton = (roll) => {
    // console.log("roll name: " + roll.rollName);
    // console.log("glazing name: " + roll.glazingName);
    // console.log("pack index: " + roll.packSize);
    // console.log("display price: " + roll.displayPrice);
    this.showPopup(roll);
    this.cartItems.push(roll);
    console.log(roll);
    this.cartTotal += roll.displayPrice;
    console.log(this.cartTotal);
    console.log(this.cartItems.length);
    // let item = document.querySelector("#item-count");
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
        <NavBar 
          logo="/assets/logo-01.svg" 
          cartItems={this.cartItems.length}
          cartTotal= {this.cartTotal} />
  
        <div className="row">
          {/* 3 cinnamon rolls displayed per row, pass in corresponding image, name, price */}
          <Roll 
             imageURL={this.state.rollData[0].imageURL}
             rollName={this.state.rollData[0].rollName}
             rollType={this.state.rollData[0].rollType}
             rollPrice={this.state.rollData[0].rollPrice}
             glazingName={this.state.rollData[0].glazingName}
             packMultiplier={this.state.rollData[0].packMultiplier}
             packSize={this.state.rollData[0].packSize}
             displayPrice={this.state.rollData[0].displayPrice}
             elementID={this.state.rollData[0].elementID} 
             addCart={this.addCartButton} />
          <Roll 
            imageURL={this.state.rollData[1].imageURL}
            rollName={this.state.rollData[1].rollName}
            rollType={this.state.rollData[1].rollType}
            rollPrice={this.state.rollData[1].rollPrice}
            glazingName={this.state.rollData[1].glazingName}
            packMultiplier={this.state.rollData[1].packMultiplier}
            packSize={this.state.rollData[1].packSize}
            displayPrice={this.state.rollData[1].displayPrice}
            elementID={this.state.rollData[1].elementID} 
            addCart={this.addCartButton} />
          <Roll 
            imageURL={this.state.rollData[2].imageURL}
            rollName={this.state.rollData[2].rollName}
            rollType={this.state.rollData[2].rollType}
            rollPrice={this.state.rollData[2].rollPrice}
            glazingName={this.state.rollData[2].glazingName}
            packMultiplier={this.state.rollData[2].packMultiplier}
            packSize={this.state.rollData[2].packSize}
            displayPrice={this.state.rollData[2].displayPrice}
            elementID={this.state.rollData[2].elementID} 
            addCart={this.addCartButton} />
        </div>
  
        <div className="row">
          {/* 3 cinnamon rolls displayed per row, pass in corresponding image, name, price */}
          <Roll 
            imageURL={this.state.rollData[3].imageURL}
            rollName={this.state.rollData[3].rollName}
            rollType={this.state.rollData[3].rollType}
            rollPrice={this.state.rollData[3].rollPrice}
            glazingName={this.state.rollData[3].glazingName}
            packMultiplier={this.state.rollData[3].packMultiplier}
            packSize={this.state.rollData[3].packSize}
            displayPrice={this.state.rollData[3].displayPrice}
            elementID={this.state.rollData[3].elementID} 
            addCart={this.addCartButton} />
          <Roll 
            imageURL={this.state.rollData[4].imageURL}
            rollName={this.state.rollData[4].rollName}
            rollType={this.state.rollData[4].rollType}
            rollPrice={this.state.rollData[4].rollPrice}
            glazingName={this.state.rollData[4].glazingName}
            packMultiplier={this.state.rollData[4].packMultiplier}
            packSize={this.state.rollData[4].packSize}
            displayPrice={this.state.rollData[4].displayPrice}
            elementID={this.state.rollData[4].elementID} 
            addCart={this.addCartButton} />
          <Roll 
            imageURL={this.state.rollData[5].imageURL}
            rollName={this.state.rollData[5].rollName}
            rollType={this.state.rollData[5].rollType}
            rollPrice={this.state.rollData[5].rollPrice}
            glazingName={this.state.rollData[5].glazingName}
            packMultiplier={this.state.rollData[5].packMultiplier}
            packSize={this.state.rollData[5].packSize}
            displayPrice={this.state.rollData[5].displayPrice}
            elementID={this.state.rollData[5].elementID} 
            addCart={this.addCartButton} />
        </div>
      </div>
    );
  }
}

export default App;