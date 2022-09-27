import React, { Component } from 'react';
import './Roll.css';

class Roll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glazingIndex: 0,
      glazingName: "Keep original",
      packIndex: 1,
      displayPrice: null
    }

    let glazeIndexDict = {
      0: "Keep original",
      1: "Sugar milk",
      2: "Vanilla milk",
      3: "Double chocolate"
    }

    let glazeDict = { //corresponding glaze names with prices
      "Keep original": 0,
      "Sugar milk": 0,
      "Vanilla milk": 0.50,
      "Double chocolate": 1.50
    }

    let packDict = {
      1: 1,
      3: 3,
      6: 5,
      12: 10
    }

    this.glazeIndexDict = glazeIndexDict;
    this.glazeDict = glazeDict;
    this.packDict = packDict;

    this.changeGlazing = this.changeGlazing.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.changePackSize = this.changePackSize.bind(this);
    this.getGlazingPrice = this.getGlazingPrice.bind(this);
    this.getPackMultiplier = this.getPackMultiplier.bind(this);
  }

  getGlazingPrice(index){
    return this.glazeDict[this.glazeIndexDict[index]];
  }

  getPackMultiplier(index){
    return this.packDict[index];
  }

  getPackSize(index){
    return index;
  }

  changePriceDelay(e){
    console.log("final price: " + this.state.displayPrice);
  }

  changePrice(e) {
    this.setState(prevState => ({
      ...prevState,
      displayPrice: (this.props.rollPrice + this.getGlazingPrice(this.state.glazingIndex)) * this.getPackMultiplier(this.state.packIndex), 
    }), () => this.changePriceDelay(e)) 
  }

  changeGlazingDelay(e) {
    this.changePrice(e);
  }

  changeGlazing(e) {
    this.setState(prevState => ({
      ...prevState,
      glazingIndex: e.target.value,
      glazingName: this.glazeIndexDict[e.target.value]
    }), () => this.changeGlazingDelay(e))    
  }

  //functions for changing price go here
  changePackSizeDelay(e) {
    this.changePrice(e);
  }

  changePackSize(e) {
  console.log("CHILD: " + e.target.children);
  for (var button of document.querySelector("#button-click").children){
      button.style.backgroundColor="white";
  }
  //   for (let button of document.querySelector("#button-click").querySelectorAll("button")){
  //     button.style.backgroundColor = "white";
  // }
  e.target.style.backgroundColor='lightgrey';
  //change background color of selected button to be grey
    this.setState(prevState => ({
      ...prevState,
      packIndex: e.target.value, 
    }), () => this.changePackSizeDelay(e))
  }

  getDisplayPrice() {
    if (this.state.displayPrice != null) {
      return this.state.displayPrice;
    }
    return this.props.displayPrice;
  }

  createFinalRoll(){
    console.log("test: " + this.state.packIndex);
    return{
        rollName: this.props.rollName,
        glazingName: this.state.glazingName,
        packSize: this.state.packIndex,
        displayPrice: this.getDisplayPrice(),
        elementID: this.props.elementID
      }
  }

  render() {
    return (
      <div className="row-item">
        {/* displays cinnamon roll image along with name */}
        <img className="roll-image" alt="cinnamon roll" src={this.props.imageURL} />
        <h4 className="item-label"> {this.props.rollName} </h4>
          <div className="roll">
            <div className="item-content">
              <div className="small-font fixed-width">
                Glazing:
              </div>
              {/* select box glazing options */}
              <select  className="custom-select expand" onChange={this.changeGlazing} value={this.state.glazingIndex}>
                <option value="0">Keep original</option>
                <option value="1">Sugar milk</option>
                <option value="2">Vanilla milk</option>
                <option value="3">Double chocolate</option>
              </select>
            </div>
            <div className="item-content">
              <div className="small-font fixed-width">
                Pack size:
              </div>
              {/* pack size options */}
              <div className="button-space" id="button-click">
                <button className="button" type="button" onClick={this.changePackSize} value={1}>1</button>
                <button className="button" type="button" onClick={this.changePackSize} value={3}>3</button>
                <button className="button" type="button" onClick={this.changePackSize} value={6}>6</button>
                <button className="button" type="button" onClick={this.changePackSize} value={12}>12</button>
              </div>
            </div>
          </div>
          <div className="item-content large-divide">
            <div className="item-label big-font fixed-width bold">{"$"+ this.getDisplayPrice().toFixed(2)}</div>
            <button className="button-long expand big-font bold" type="button" onClick={() => this.props.addCart(this.createFinalRoll())}>Add to Cart</button>
          </div>
      </div>
    );
  }
}

export default Roll