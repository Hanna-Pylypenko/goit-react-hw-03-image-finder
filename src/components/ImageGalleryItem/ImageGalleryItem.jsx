import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    modalOpen: false,
  };
  toggleModal = () => {
    this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }));
  };
  stateChanger = value => {
    this.setState({ modalOpen: value });
  };
  render() {
    const { alt, src, modalImage } = this.props;
    return (
      <li className={css.galleryItem} onClick={this.toggleModal}>
        <img src={src} alt={alt} />
        {this.state.modalOpen && (
          <Modal
            toggleModal={this.stateChanger}
            modalImage={modalImage}
            alt={alt}
          />
        )}
      </li>
    );
  }
}
