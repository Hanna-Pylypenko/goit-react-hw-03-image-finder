import { Component } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  shutModalClick = () => {
    this.props.toggleModal(false);
  };
  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.shutModalClick}>
        <div className={css.modal}>
          <img src={this.props.modalImage} alt={this.props.alt} width="700" />
        </div>
      </div>,
      modalRoot
    );
  }
}
