import React, { Component } from 'react';
import './Roll.css';

class Roll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glazingIndex: 0,
      packIndex: 1,
      displayPrice: 0
    }
    var glazeIndexDict = {
      0: "Keep original",
      1: "Sugar milk",
      2: "Vanilla milk",
      3: "Double chocolate"
    }

    var glazeDict = { //corresponding glaze names with prices
      "Keep original": 0,
      "Sugar milk": 0,
      "Vanilla milk": 0.50,
      "Double chocolate": 1.50
    }

    var packDict = {
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
  }
  
  changePrice(e) {
    // this.displayPrice = (this.props.rollPrice + this.props.glazingPrice) * (this.packMultiplier); 
    // this.setState(prevState => ({
    //   ...prevState,
    //   displayPrice: this.displayPrice, 
    // }))
    
    console.log("glazing price: " + this.glazeDict[this.glazeIndexDict[this.state.glazingIndex]]);
    console.log("roll price: " + this.props.rollPrice);
    console.log(this.state.packIndex);
    console.log("pack multiplier: " + this.packDict[this.state.packIndex]);
    // this.props.glazingPrice = this.glazeDict[this.glazeIndexDict[this.state.glazingIndex]];
    // this.props.rollPrice = (this.props.rollPrice + this.glazeDict[this.glazeIndexDict[this.state.glazingIndex]]) * (this.props.packMultiplier);
    console.log((this.props.rollPrice + this.glazeDict[this.glazeIndexDict[this.state.glazingIndex]]) * this.packDict[this.state.packIndex]);
    this.setState(prevState => ({
      ...prevState,
      displayPrice: (this.props.rollPrice + this.glazeDict[this.glazeIndexDict[this.state.glazingIndex]]) * this.packDict[this.state.packIndex], 
    })) 
    console.log("final price: " + this.state.displayPrice);
  }

  changeGlazing(e) {
    this.setState(prevState => ({
      ...prevState,
      glazingIndex: e.target.value, 
    })) 
    console.log(e.target.value);
    console.log("glazing: " +  this.glazeDict[this.glazeIndexDict[this.state.glazingIndex]]);
    //this.props.glazingPrice = this.glazeDict[this.glazeIndexDict[this.state.glazingIndex]];
    this.changePrice(e);
  }
  //functions for changing price go here

  changePackSize(e) {
    this.setState(prevState => ({
      ...prevState,
      packIndex: e.target.value, 
    }))
    console.log("pack size: " + e.target.value);
    this.changePrice(e);
  }


    // dummyTestFunction() {
  //   console.log()this)
  //   this.setState(prevState => ({
  //     ...prevState,
  //     glazingIndex: 0
  //   }
  //   ))
  //   console.log(this.state)
  // }


  // selectedGlaze: "",
  // selectedPackSize: "",
  // displayPrice: ""

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
              <div className="button-space">
                <button className="button grey" type="button" onClick={this.changePackSize} value={1}>1</button>
                <button className="button" type="button" onClick={this.changePackSize} value={3}>3</button>
                <button className="button" type="button" onClick={this.changePackSize} value={6}>6</button>
                <button className="button" type="button" onClick={this.changePackSize} value={12}>12</button>
              </div>
            </div>
          </div>
          <div className="item-content large-divide">
            <div className="item-label big-font fixed-width bold">{"$"+this.props.rollPrice}</div>
            <button className="button-long expand big-font bold" type="button">Add to Cart</button>
          </div>
      </div>
    );
  }
}

export default Roll