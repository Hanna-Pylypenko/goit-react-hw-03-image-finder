import { Component } from 'react';
import css from './Button.module.css';
export class Button extends Component {
  onClick = () => {
    this.props.onClick(1);
  };
  render() {
    return (
      <button type="button" className={css.button} onClick={this.onClick}>
        Load more
      </button>
    );
  }
}
