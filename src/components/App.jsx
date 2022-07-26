import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { Button } from './Button/Button';
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {
  state = {
    searchedItem: '',
    searchedItemsCollection: [],
    totalItems: 0,
    pageNumber: 1,
    loading: false,
  };

  onSubmit = data => {
    this.setState({ loading: true });
    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?q=${data}&page=1&key=27847639-8e847d0d7182257a527cf2e5a&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(res => {
          this.setState({
            searchedItemsCollection: res.hits,
            totalItems: res.totalHits - 12,
          });
        })
        .finally(() => this.setState({ loading: false }));
    }, 2000);

    this.setState(prevState => ({
      searchedItem: data,
      pageNumber: prevState.pageNumber + 1,
    }));
  };
  onClick = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.state.searchedItem}&page=${this.state.pageNumber}&key=27847639-8e847d0d7182257a527cf2e5a&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(res => {
        console.log(this.state);
        this.setState(prevState => ({
          pageNumber: prevState.pageNumber + 1,
          searchedItemsCollection: [
            ...prevState.searchedItemsCollection,
            ...res.hits,
          ],
          totalItems: prevState.totalItems - res.hits.length,
        }));
      });
  };

  render() {
    return (
      <div
        style={{
          margin: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchBar onSubmit={this.onSubmit} />
        {this.state.loading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="green"
            wrapperStyle
            wrapperClass
          />
        )}
        <ToastContainer position="top-center" autoClose={3000} />
        <ImageGallery itemCollection={this.state.searchedItemsCollection} />

        {this.state.searchedItemsCollection.length > 11 && (
          <Button onClick={this.onClick} />
        )}
      </div>
    );
  }
}
