import { Component } from 'react';
import css from './Button.module.css';
export class Button extends Component {
  state = {
    pageNumber: this.props.pageNumber,
  };

  onClick = () => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
    this.props.onClick(this.state.pageNumber);
  };
  render() {
    return (
      <button type="button" className={css.button} onClick={this.onClick}>
        Load more
      </button>
    );
  }
}
