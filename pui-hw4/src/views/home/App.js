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
          packMultiplier: 0,
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
          packMultiplier: 0,
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
          packMultiplier: 0,
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
          packMultiplier: 0,
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
          packMultiplier: 0,
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
          packMultiplier: 0,
          packSize: 1,
          displayPrice: 3.99,
          elementID: "strawberry_roll"
        },
      ],
    
      selectedGlaze: "",
      selectedPackSize: "",
      displayPrice: ""
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar 
          logo="/assets/logo-01.svg" />
  
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
             elementID={this.state.rollData[0].elementID} />
          <Roll 
            imageURL={this.state.rollData[1].imageURL}
            rollName={this.state.rollData[1].rollName}
            rollType={this.state.rollData[1].rollType}
            rollPrice={this.state.rollData[1].rollPrice}
            glazingName={this.state.rollData[1].glazingName}
            packMultiplier={this.state.rollData[1].packMultiplier}
            packSize={this.state.rollData[1].packSize}
            displayPrice={this.state.rollData[1].displayPrice}
            elementID={this.state.rollData[1].elementID} />
          <Roll 
            imageURL={this.state.rollData[2].imageURL}
            rollName={this.state.rollData[2].rollName}
            rollType={this.state.rollData[2].rollType}
            rollPrice={this.state.rollData[2].rollPrice}
            glazingName={this.state.rollData[2].glazingName}
            packMultiplier={this.state.rollData[2].packMultiplier}
            packSize={this.state.rollData[2].packSize}
            displayPrice={this.state.rollData[2].displayPrice}
            elementID={this.state.rollData[2].elementID} />
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
            elementID={this.state.rollData[3].elementID} />
          <Roll 
            imageURL={this.state.rollData[4].imageURL}
            rollName={this.state.rollData[4].rollName}
            rollType={this.state.rollData[4].rollType}
            rollPrice={this.state.rollData[4].rollPrice}
            glazingName={this.state.rollData[4].glazingName}
            packMultiplier={this.state.rollData[4].packMultiplier}
            packSize={this.state.rollData[4].packSize}
            displayPrice={this.state.rollData[4].displayPrice}
            elementID={this.state.rollData[4].elementID} />
          <Roll 
            imageURL={this.state.rollData[5].imageURL}
            rollName={this.state.rollData[5].rollName}
            rollType={this.state.rollData[5].rollType}
            rollPrice={this.state.rollData[5].rollPrice}
            glazingName={this.state.rollData[5].glazingName}
            packMultiplier={this.state.rollData[5].packMultiplier}
            packSize={this.state.rollData[5].packSize}
            displayPrice={this.state.rollData[5].displayPrice}
            elementID={this.state.rollData[5].elementID} />
        </div>
      </div>
    );
  }
}

export default App;




// glazingDict: [
      //   {
      //     "Keep original": 0,
      //     "Sugar milk": 0,
      //     "Vanilla milk": 0.50,
      //     "Double chocolate": 1.50
      //   }
      // packDict: [
      //   {
      //     1: 1,
      //     3: 3,
      //     6: 5,
      //     12: 10
      //   }
      // ]
      // rollDict: [
      //   {
      //     "original": originalRoll,
      //     "apple": appleRoll,
      //     "raisin": raisinRoll,
      //     "choc": chocolateRoll,
      //     "strawberry": strawberryRoll,
      //     "walnut": walnutRoll
      //   }
      // ]