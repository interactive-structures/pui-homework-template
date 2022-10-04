import React, { Component } from 'react';
import './App.css';
import Roll from './Roll';
import NavBar from './NavBar';
import SearchBar from './Search';
import Cart from './Cart';

let displayRollCount = 0;
let displayCart = false;
let cartClicked = false;

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
      cartItems: [],
      packSize: 1,
      glazingOption: "Keep original",
      showCart: false,
      totalItems: 0,
      totalPrice: 0
    }

    let sortName = { //corresponding glaze names with prices
      0: "rollPrice",
      1: "rollName"
    }
    
    let cartTotal = 0;
    let filterRoll = null;

    this.cartTotal = cartTotal;
    this.filterRoll = filterRoll;
    this.sortName = sortName;
    this.sortRollButton = this.sortRollButton.bind(this);
    this.changeOverallPrice = this.changeOverallPrice.bind(this);
  }

  componentDidMount() {
    this.sortRollButton(0);
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
    cartClicked = true;
    this.showPopup(roll);
    this.state.cartItems.push(roll);

    let cartItemTemp = [...this.state.cartItems];
    console.log("LIST: " + cartItemTemp.imageURL);

    this.setState(prevState => ({
      ...prevState,
      cartItems: cartItemTemp,
      totalItems: cartItemTemp.length
    }))

    if(this.state.cartItems.length > 0){
      displayCart = true;
    }
    else{
      displayCart = false;
    }

    this.cartTotal += roll.displayPrice;

    if (this.state.cartItems.length === 1){
      document.querySelector("#item-count").textContent = (this.state.cartItems.length + " item");
    }
    else{
      document.querySelector("#item-count").textContent = (this.state.cartItems.length + " items");
    }
    document.getElementById('total-cost').textContent = "Total: $" + this.cartTotal.toFixed(2);
    
    this.setState(prevState => ({
      ...prevState,
      totalPrice: this.cartTotal.toFixed(2)
    }))
  };

  displayCartButton = () => {
    console.log("you pressed the CART button");
    this.setState(prevState => ({
      ...prevState,
      showCart: true
    }))
    console.log("showCart: "+ this.state.showCart);
  };

  delayDisplay (){
    console.log("hideRolls:" + this.displayRollCount);
  }

  changeTextDisplay = () => {
    displayRollCount = 1;
    console.log(displayRollCount);
  }

  filterRollButton = (query) => {
    console.log("text input: " + query);
    displayRollCount = 0;
    
    this.setState(prevState => ({
      ...prevState,
      filterRoll: query
    }))
  }

  sortRollButton = (order) => {
    console.log("text input: " + order);

    const sortProperty = this.sortName[order];
    console.log("sorting by: " + sortProperty);

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
    }))
    console.log("sorted list: " + this.state.rollData);
  }
  
  changeOverallPrice(idx, price, pack, glaze){
    const rollDataTemp = [...this.state.rollData];
    rollDataTemp[idx].displayPrice = price;
    rollDataTemp[idx].packSize = pack;
    rollDataTemp[idx].glazingOption = glaze;

    console.log(idx);
    console.log("1: " + pack);
    console.log("2: " + glaze);
    console.log("p: " + rollDataTemp[idx].displayPrice);
    console.log("s: " + rollDataTemp[idx].packSize);
    console.log("g: " + rollDataTemp[idx].glazingOption);
    this.setState({ 
      rollData: rollDataTemp 
    });
    // this.state.displayPrice = this.props.rollPrice + this.getGlazingPrice(this.state.glazingIndex)) * this.getPackMultiplier(this.state.packIndex)
  }

  render() {
    return (
      <div className="App">
        {/* header bar for the Bun Bun Shop webpage */}
        <NavBar 
          logo="/pui-assignments/pui-hw5/assets/logo-01.svg" 
          cartItems={this.state.cartItems.length}
          cartTotal= {this.cartTotal} 
          displayCart = {this.displayCartButton} 
          totalItems={this.state.totalItems}
          totalPrice={this.state.totalPrice} />
      
          {/* {!displayCart && cartClicked && <p>The cart is empty! </p>} */}
          <div className="row">
            
            {this.state.cartItems.map((roll, idx) => {
              if (this.state.totalItems > 0){
                return <Cart 
                  key={idx}
                  imageURL={roll.imageURL}
                  rollName={roll.rollName}
                  glazingName={roll.glazingName}
                  packSize={roll.packSize}
                  displayPrice={roll.displayPrice}
                  totalItems={this.state.totalItems}
                  totalPrice={this.state.totalPrice} />
              }
              else{
                <div>the cart </div>
              }
            })}

          </div>  

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
              displayPrice={roll.displayPrice}
              addCart={this.addCartButton} 
              changeOverallPrice={(num) => this.changeOverallPrice(idx, num)} />;
          }
        })}
        {displayRollCount == 0 && <p>No match!</p>}
        </div>
      </div>
    );
  }
}

export default App;