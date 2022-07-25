import React, { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    searchedItem: [],
  };
  onSubmit = evt => {
    evt.preventDefault();

    console.log('submitted');
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchBar onSubmit={this.onSubmit} />
      </div>
    );
  }
}
