import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { Button } from 'components/Button/Button';
import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';
export class ImageGallery extends Component {
  state = {
    searchedItemsCollection: [],
    pageNumber: 1,
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchedItem !== this.props.searchedItem) {
      this.setState({
        loading: true,
        searchedItemsCollection: [],
        pageNumber: 1,
      });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.props.searchedItem}&page=${this.state.pageNumber}&key=27847639-8e847d0d7182257a527cf2e5a&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => response.json())
          .then(res => {
            this.setState({
              searchedItemsCollection: res.hits,
            });
          })
          .finally(() => this.setState({ loading: false }));
      }, 2000);
    }
    if (prevState.pageNumber !== this.state.pageNumber) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchedItem}&page=${this.state.pageNumber}&key=27847639-8e847d0d7182257a527cf2e5a&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(res => {
          console.log(res);
          this.setState(prevState => ({
            searchedItemsCollection: [
              ...prevState.searchedItemsCollection,
              ...res.hits,
            ],
          }));
        });
    }
  }
  onClick = data => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + data }));
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
        {this.state.loading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="green"
            wrapperStyle="true"
            wrapperClass="true"
          />
        )}
        <ul className={css.gallery}>
          {this.state.searchedItemsCollection.map(
            ({ id, webformatURL, tags, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id.toString()}
                  src={webformatURL}
                  alt={tags}
                  modalImage={largeImageURL}
                />
              );
            }
          )}
        </ul>
        {this.state.searchedItemsCollection.length > 11 && (
          <Button onClick={this.onClick} />
        )}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  searchedItem: PropTypes.string.isRequired,
};
