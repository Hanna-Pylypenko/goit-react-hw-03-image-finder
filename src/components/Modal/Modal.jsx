import { Component } from 'react';
import css from './Modal.module.css';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.props.toggleModal}>
        <div className={css.modal}>
          <img src={this.props.modalImage} alt={this.props.alt} width="700" />
        </div>
      </div>,
      modalRoot
    );
  }
}
