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
          imageURL: "/pui-assignments/pui-hw5/assets/original-cinnamon-roll.jpg",
          rollName: "Original cinnamon roll",
          rollPrice: 2.49,
          glazingName: "Keep original",
          displayPrice: 2.49,
          elementID: "original_roll"
        },
        {
          imageURL: "/pui-assignments/pui-hw5/assets/apple-cinnamon-roll.jpg",
          rollName: "Apple cinnamon roll",
          rollPrice: 3.49,
          glazingName: "Keep original",
          displayPrice: 3.49,
          elementID: "apple_roll"
        },
        {
          imageURL: "/pui-assignments/pui-hw5/assets/raisin-cinnamon-roll.jpg",
          rollName: "Raisin cinnamon roll",
          rollPrice: 2.99,
          glazingName: "Keep original",
          displayPrice: 2.99,
          elementID: "raisin_roll"
        },
        {
          imageURL: "/pui-assignments/pui-hw5/assets/walnut-cinnamon-roll.jpg",
          rollName: "Walnut cinnamon roll",
          rollPrice: 3.49,
          glazingName: "Keep original",
          displayPrice: 3.49,
          elementID: "walnut_roll"
        },
        {
          imageURL: "/pui-assignments/pui-hw5/assets/double-chocolate-cinnamon-roll.jpg",
          rollName: "Double-chocolate cinnamon roll",
          rollPrice: 3.99,
          glazingName: "Keep original",
          displayPrice: 3.99,
          elementID: "choc_roll"
        },
        {
          imageURL: "/pui-assignments/pui-hw5/assets/strawberry-cinnamon-roll.jpg",
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
    let filterRoll = null;
    let showNone = false;

    this.cartTotal = cartTotal;
    this.cartItems = cartItems;
    this.filterRoll = filterRoll;
    this.showNone = showNone;
  }

  // function below displays the populated popup for 3 seconds when the user clicks "Add to Cart" button
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

  filterRollButton = (query) => {
    console.log("text input: " + query);
    this.setState(prevState => ({
      ...prevState,
      filterRoll: query
    }))
  }

  render() {
    return (
      <div className="App">
        {/* header bar for the Bun Bun Shop webpage */}
        <NavBar 
          logo="/pui-assignments/pui-hw5/assets/logo-01.svg" 
          cartItems={this.cartItems.length}
          cartTotal= {this.cartTotal}
          filterRolls = {this.filterRollButton} />
  
        {/* 3 cinnamon rolls displayed per row, pass in corresponding image, name, price */}
        <div className="row">
        {this.state.rollData.map((roll, idx) => {
          console.log("a: " + this.state.filterRoll);
          console.log("b: " + roll.rollName);
          if (idx < 3 && (this.state.filterRoll == null || roll.rollName.toLowerCase().includes(this.state.filterRoll.toLowerCase()))) {
            this.state.showNone = true;
            return <Roll 
              key={idx}
              elementID={idx}
              imageURL={roll.imageURL}
              rollName={roll.rollName}
              rollPrice={roll.rollPrice}
              glazingName={roll.glazingName}
              displayPrice={roll.displayPrice}
              addCart={this.addCartButton} />;
          }
        })} 
        </div>
  
        {/* 3 cinnamon rolls displayed per row, pass in corresponding image, name, price */}
        <div className="row">
          {this.state.rollData.map((roll, idx) => {
            if (idx <= 2 && roll.rollName.includes(this.state.filterRoll)){
              this.state.showNone = true;
            }
            if (idx > 2 && (this.state.filterRoll == null || roll.rollName.includes(this.state.filterRoll))) {
              this.state.showNone = true;
              return <Roll 
                key={idx}
                elementID={idx}
                imageURL={roll.imageURL}
                rollName={roll.rollName}
                rollPrice={roll.rollPrice}
                glazingName={roll.glazingName}
                displayPrice={roll.displayPrice}
                addCart={this.addCartButton} />;
            }
            if (this.state.showNone == false && idx == 6){
              console.log("BINGBONG");
            }
          })} 
          
          
        </div>
        
      </div>
    );
  }
}

export default App;