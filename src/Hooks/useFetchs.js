// fazer as funções de fetch e exporta-las
import { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';

function useFetchApi() {
  const context = useContext(MyContext);
  console.log(context);
  const { inputSearchBar } = useContext(MyContext);
  const [ingredient, setIngredient] = useState([]);
  const [name, setName] = useState([]);
  const [firstLetter, setFirstLetter] = useState([]);
  const apiNotFound = 'API endpoint not found';

  useEffect(() => {
    const getIngredient = async () => {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputSearchBar}`;
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
    const getName = async () => {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearchBar}`;
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
    const getFirstLetter = async () => {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputSearchBar}`;
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
