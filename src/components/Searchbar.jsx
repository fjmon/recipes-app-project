function SearchBar() {
  return (
    <div id="search-bar" data-testid="search-bar">
      <div id="container-radios">
        <label htmlFor="ingrediente">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="ingrediente"
            id=""
          />
          Ingrediente
        </label>
        <label htmlFor="nome">
          <input
            type="radio"
            data-testid="name-search-radio"
            name="nome"
            id=""
          />
          Nome
        </label>
        <label htmlFor="primeira-letra">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="primeira-letra"
            id=""
          />
          Primeira letra
        </label>
      </div>
      <input
        type="text"
        name="name"
        placeholder="typing"
        data-testid="search-input"
        /* value={ inputSearchBar } */
        /* onChange={ handleChangeSearchBar } */
      />
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar

      </button>
    </div>
  );
}

export default SearchBar;
