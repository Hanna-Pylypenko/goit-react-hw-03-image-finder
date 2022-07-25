import css from './SearchBar.module.css';
export const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.searchBar}>
      <form className={css.searchForm}>
        <button type="submit" className={css.button} onSubmit={onSubmit}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
