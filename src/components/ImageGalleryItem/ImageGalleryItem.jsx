import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    modalOpen: 'closed',
  };
  toggleModal = () => {
    if (this.state.modalOpen === 'closed') {
      this.setState({ modalOpen: 'opened' });
    }
    if (this.state.modalOpen === 'opened') {
      this.setState({ modalOpen: 'closed' });
    }
  };
  render() {
    const { alt, src, modalImage } = this.props;
    return (
      <li className={css.galleryItem} onClick={this.toggleModal}>
        <img src={src} alt={alt} />
        {this.state.modalOpen === 'opened' && (
          <Modal
            toggleModal={this.toggleModal}
            modalImage={modalImage}
            alt={alt}
          />
        )}
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  modalImage: PropTypes.string.isRequired,
};
