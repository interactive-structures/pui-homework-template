import React, { Component } from 'react';
import './Search.css';

class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchBar: "",
        sortBy: 0
      }

    this.searchBarChanged = this.searchBarChanged.bind(this);
    this.searchButtonClicked=this.searchButtonClicked.bind(this);
    this.sortByChanged=this.sortByChanged.bind(this);
  }

  // returns user's search query back to App.js
  searchButtonClicked(){
    return this.state.searchBar;
  }

  // updates variable that stores what the user entered into the search bar
  searchBarChanged(e){
    this.setState(prevState => ({
      ...prevState,
      searchBar: e.target.value
    }))
  }

  changeSortDelay(){
    this.props.sortRolls(this.state.sortBy);
  }

  // tells App.js whether to sort by name or base price
  sortByChanged(e){
    this.setState(prevState => ({
      ...prevState,
      sortBy: e
    }), () => this.changeSortDelay())
  }
  
    render() {
      return (
        <div className="header-bar">
            <div className="search">
            <input type="search" id="query" onChange={this.searchBarChanged} value={this.state.searchBar}></input>
            <button onClick={() => this.props.filterRolls(this.searchButtonClicked())}>Search</button>
            </div>
            <div className="small-font sort-by">
            sort by:
            <select onChange={e => this.sortByChanged(e.target.value)}>
                <option value="0">Base Price</option>
                <option value="1">Name</option>
            </select>
            </div>
        </div>
      );
    }
  }
  
  export default SearchBar