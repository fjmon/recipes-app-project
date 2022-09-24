// fazer as funções de fetch e exporta-las
import { useEffect, useState } from 'react';

function useFetchApi() {
  const [ingredient, setIngredient] = useState([]);
  const [name, setName] = useState([]);
  const [firstLetter, setFirstLetter] = useState([]);
  const apiNotFound = 'API endpoint not found';

  useEffect(() => {
    const getIngredient = async (ingrediente) => {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
        const response = await fetch(url);
        const results = await response.json();
        setIngredient(results);
      } catch (error) {
        console.log(apiNotFound);
      }
    };
    getIngredient();
  }, []);

  useEffect(() => {
    const getName = async (nome) => {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`;
        const response = await fetch(url);
        const results = await response.json();
        setName(results);
      } catch (error) {
        console.log(apiNotFound);
      }
    };
    getName();
  }, []);

  useEffect(() => {
    const getFirstLetter = async (first) => {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${first}`;
        const response = await fetch(url);
        const results = await response.json();
        setIngredient(results);
      } catch (error) {
        console.log(apiNotFound);
      }
    };
    getFirstLetter();
  }, []);

  return { ingredient, setIngredient, name, setName, firstLetter, setFirstLetter };
}

export default useFetchApi;
