import React, { Component } from 'react';
import './App.css';
import Roll from './Roll';
import NavBar from './NavBar';
import SearchBar from './Search';
import Cart from './Cart';
import CartHeader from './CartHeader';

let displayRollCount = 0;
let displayCart = false;
let cartIsClicked = false;
let cartIsOpen = false;

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
          packSize: 1,
          glazingName: "Keep original",
          displayPrice: 2.49,
          elementID: "original_roll"
        },
        {
          imageURL: "/pui-assignments/pui-hw5/assets/apple-cinnamon-roll.jpg",
          rollName: "Apple cinnamon roll",
          rollPrice: 3.49,
          packSize: 1,
          glazingName: "Keep original",
          displayPrice: 3.49,
          elementID: "apple_roll"
        },
        {
          imageURL: "/pui-assignments/pui-hw5/assets/raisin-cinnamon-roll.jpg",
          rollName: "Raisin cinnamon roll",
          rollPrice: 2.99,
          packSize: 1,
          glazingName: "Keep original",
          displayPrice: 2.99,
          elementID: "raisin_roll"
        },
        {
          imageURL: "/pui-assignments/pui-hw5/assets/walnut-cinnamon-roll.jpg",
          rollName: "Walnut cinnamon roll",
          rollPrice: 3.49,
          packSize: 1,
          glazingName: "Keep original",
          displayPrice: 3.49,
          elementID: "walnut_roll"
        },
        {
          imageURL: "/pui-assignments/pui-hw5/assets/double-chocolate-cinnamon-roll.jpg",
          rollName: "Double-chocolate cinnamon roll",
          rollPrice: 3.99,
          packSize: 1,
          glazingName: "Keep original",
          displayPrice: 3.99,
          elementID: "choc_roll"
        },
        {
          imageURL: "/pui-assignments/pui-hw5/assets/strawberry-cinnamon-roll.jpg",
          rollName: "Strawberry cinnamon roll",
          rollPrice: 3.99,
          packSize: 1,
          glazingName: "Keep original",
          displayPrice: 3.99,
          elementID: "strawberry_roll"
        },
      ],
      cartItems: [],
      glazingOption: "Keep original",
      showCart: false,
      totalItems: 0,
      totalPrice: 0,
    }

    let sortName = { //corresponding glaze names with prices
      0: "rollPrice",
      1: "rollName"
    }
    
    let filterRoll = null;

    this.filterRoll = filterRoll;
    this.sortName = sortName;
    this.sortRollButton = this.sortRollButton.bind(this);
    this.changeOverallPrice = this.changeOverallPrice.bind(this);
    this.displayCartButton = this.displayCartButton.bind(this);
    this.removeRollButton = this.removeRollButton.bind(this);
  }

  componentDidMount() {
    this.sortRollButton(0);
  }

  addCartButton = (roll) => {
    this.state.cartItems.push(roll);

    let cartItemTemp = [...this.state.cartItems];

    let newTotalPrice = this.state.totalPrice + roll.displayPrice;
    let newTotalItems = this.state.totalItems + 1;

    this.setState(prevState => ({
      ...prevState,
      cartItems: cartItemTemp,
      totalPrice: newTotalPrice,
      totalItems: newTotalItems
    }),() => this.removeDelay())
  };

  displayDelay(){
    cartIsClicked = true;
    cartIsOpen = !cartIsOpen;
  }

  displayCartButton = () => {
    this.setState(prevState => ({
      ...prevState,
      showCart: true
    }))
    this.displayDelay()
  };

  changeTextDisplay = () => {
    displayRollCount = 1;
  }

  filterRollButton = (query) => {
    displayRollCount = 0;
    
    this.setState(prevState => ({
      ...prevState,
      filterRoll: query
    }))
  }

  delay(){
    console.log(this.state.rollData);
  }
  sortRollButton = (order) => {
    const sortProperty = this.sortName[order];

    const sorted =
      [...this.state.rollData].sort((a, b) => {
          const nameA = a[sortProperty]; 
          const nameB = b[sortProperty];
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        });
      
    this.setState(prevState => ({
      ...prevState,
      rollData: sorted
    }),()=> this.delay())
  }
  
  changeOverallPrice(idx, price, pack, glaze){
    const rollDataTemp = [...this.state.rollData];
    rollDataTemp[idx].displayPrice = price;
    rollDataTemp[idx].packSize = parseInt(pack);
    rollDataTemp[idx].glazingName = glaze;

    console.log(idx);
    console.log("p: " + rollDataTemp[idx].displayPrice);
    console.log("s: " + rollDataTemp[idx].packSize);
    console.log("g: " + rollDataTemp[idx].glazingOption);
    this.setState({ 
      rollData: rollDataTemp 
    }, ()=>this.removeDelay());
  }

  removeDelay(){
    console.log(this.state.rollData);
    console.log(this.state.totalItems);
    console.log(this.state.totalPrice);
  }

  removeRollButton(rollIndex){
    let newTotalPrice = this.state.totalPrice - this.state.cartItems[rollIndex].displayPrice;

    let newTotalItems = this.state.totalItems - 1;
    const newcartItems = this.state.cartItems;
    if (this.state.cartItems.length >= 1){
      newcartItems.splice(rollIndex, 1);
      this.setState(prevState => ({
        ...prevState,
        cartItems: newcartItems,
        totalPrice: newTotalPrice,
        totalItems: newTotalItems
      }),() => this.removeDelay())
    }
    
    else{
      this.setState(prevState => ({
        ...prevState,
        cartItems: [],
        totalPrice: 0,
        totalItems: 0
      }),() => this.removeDelay())
    }
  }

  render() {
    return (
      <div className="App">
        {/* header bar for the Bun Bun Shop webpage */}
        <NavBar 
          logo="/pui-assignments/pui-hw5/assets/logo-01.svg" 
          cartItems={this.state.cartItems.length}
          displayCart = {this.displayCartButton} 
          totalItems={this.state.totalItems}
          totalPrice={this.state.totalPrice} />

          {this.state.totalItems != 0 && cartIsClicked && cartIsOpen &&
          <CartHeader
            totalItems={this.state.totalItems}
            totalPrice={this.state.totalPrice} />}

        <div className="cart-row">
          {this.state.cartItems.map((roll, idx) => {
            if (this.state.totalItems != 0 && this.state.showCart && cartIsOpen) {
              return <Cart 
                key={idx}
                elementID={idx}
                imageURL={roll.imageURL}
                rollName={roll.rollName}
                glazingName={roll.glazingName}
                packSize={roll.packSize}
                displayPrice={roll.displayPrice} 
                removeRoll={this.removeRollButton} />
            }
          })}
          {this.state.totalItems == 0 && cartIsClicked && cartIsOpen && <p>The cart is empty!</p>}
        </div>  
        {this.state.totalItems != 0 && cartIsClicked && cartIsOpen && <hr className="line-divide"/>}
        <SearchBar
          filterRolls = {this.filterRollButton}
          sortRolls={this.sortRollButton} /> 
        
        {/* 3 cinnamon rolls displayed per row, pass in corresponding image, name, price */}
        <div className="row">
        {this.state.rollData.map((roll, idx) => {
          if ((this.state.filterRoll == null || roll.rollName.toLowerCase().includes(this.state.filterRoll.toLowerCase()))) {
            this.changeTextDisplay();
            
            return <Roll 
              key={idx}
              elementID={idx}
              imageURL={roll.imageURL}
              rollName={roll.rollName}
              rollPrice={roll.rollPrice}
              glazingName={roll.glazingName}
              packIndex={roll.packIndex}
              displayPrice={roll.displayPrice}
              addCart={this.addCartButton} 
              changeOverallPrice={(num, num1, num2) => this.changeOverallPrice(idx, num, num1, num2)} />;
          }
        })}
        {displayRollCount == 0 && <p>No match!</p>}
        </div>
      </div>
    );
  }
}

export default App;