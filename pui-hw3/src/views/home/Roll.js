import React, { Component } from 'react';
import './Roll.css';

class Roll extends Component {
  render() {
    return (
      <div className="row-item">
        <img className="roll-image" alt="cinnamon roll" src={this.props.imageURL} />
        <h4 className="item-label"> {this.props.name} </h4>
          <div className="roll">
            <div className="item-content">
              <div className="small-font fixed-width">
                Glazing:
              </div>
              <select  className="custom-select expand">
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
              <div className="button-space">
                <button className="button grey" type="button">1</button>
                <button className="button" type="button">3</button>
                <button className="button" type="button">6</button>
                <button className="button" type="button">12</button>
              </div>
            </div>
          </div>
          <div className="item-content large-divide">
            <div className="item-label big-font fixed-width bold">{this.props.price}</div>
            <button className="button-long expand big-font bold" type="button">Add to Cart</button>
          </div>
      </div>
    );
  }
}

export default Roll