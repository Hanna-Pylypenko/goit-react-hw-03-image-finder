import css from './SearchBar.module.css';
import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  state = {
    searchedItem: '',
  };
  inputHandler = evt => {
    this.setState({ searchedItem: evt.currentTarget.value });
  };
  onSubmit = evt => {
    evt.preventDefault();

    if (this.state.searchedItem.trim() === '') {
      toast.warn(' Please, type something.');
      return;
    }
    if (this.state.searchedItem.trim()) {
      this.props.onSubmit(this.state.searchedItem);
      this.reset();
    }
  };
  reset = () => {
    this.setState({ searchedItem: '' });
  };

  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.searchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            value={this.state.searchedItem}
            onChange={this.inputHandler}
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
