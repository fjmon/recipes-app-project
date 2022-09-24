function SearchBar() {
  return (
    <main>
      <label htmlFor="ingrediente">
        Ingrediente
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="ingrediente"
          id=""
        />
      </label>
      <label htmlFor="nome">
        Nome
        <input
          type="radio"
          data-testid="name-search-radio"
          name="nome"
          id=""
        />
      </label>
      <label htmlFor="primeira-letra">
        Primeira letra
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="primeira-letra"
          id=""
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Busca

      </button>
    </main>
  );
}

export default SearchBar;
