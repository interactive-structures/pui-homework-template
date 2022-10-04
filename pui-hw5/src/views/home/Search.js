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

  searchButtonClicked(){
    console.log(this.state.searchBar);
    return this.state.searchBar;
  }

  searchBarChanged(e){
    this.setState(prevState => ({
      ...prevState,
      searchBar: e.target.value
    }))
  }

  changeSortDelay(){
    // console.log(this.state.sortBy);
    this.props.sortRolls(this.state.sortBy);
  }

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