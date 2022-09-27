// fazer as funções de fetch e exporta-las
// import { useContext, useEffect, useState } from 'react';
// import MyContext from '../context/MyContext';

const apiNotFound = 'API endpoint not found';

const fetchIngredient = async (value) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`;
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(apiNotFound);
  }
};

const fetchName = async (value) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(apiNotFound);
  }
};

const fetchFirstLetter = async (value) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`;
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(apiNotFound);
  }
};

const fetchDrinkIngredient = async (value) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`;
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(apiNotFound);
  }
};

const fetchDrinkName = async (value) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(apiNotFound);
  }
};

const fetchDrinkFirstLetter = async (value) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`;
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log(apiNotFound);
  }
};

export { fetchIngredient, fetchName, fetchFirstLetter,
  fetchDrinkIngredient, fetchDrinkName, fetchDrinkFirstLetter };

// function useFetchApi() {
//   const { inputSearchBar } = useContext(MyContext);
//   console.log(inputSearchBar);
//   const [ingredient, setIngredient] = useState([]);
//   const [name, setName] = useState([]);
//   const [firstLetter, setFirstLetter] = useState([]);
//   const apiNotFound = 'API endpoint not found';

//   useEffect(() => {
//     const getIngredient = async () => {
//       console.log(inputSearchBar);
//       try {
//         const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputSearchBar}`;
//         const response = await fetch(url);
//         const { meals } = await response.json();
//         console.log(meals);
//         setIngredient(meals);
//         console.log(ingredient);
//       } catch (error) {
//         console.log(apiNotFound);
//       }
//     };
//     getIngredient();
//   }, []);

//   useEffect(() => {
//     const getName = async () => {
//       try {
//         const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearchBar}`;
//         const response = await fetch(url);
//         const results = await response.json();
//         setName(results);
//       } catch (error) {
//         console.log(apiNotFound);
//       }
//     };
//     getName();
//   }, []);

//   useEffect(() => {
//     const getFirstLetter = async () => {
//       try {
//         const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputSearchBar}`;
//         const response = await fetch(url);
//         const results = await response.json();
//         setIngredient(results);
//       } catch (error) {
//         console.log(apiNotFound);
//       }
//     };
//     getFirstLetter();
//   }, []);

//   return { ingredient,
//     setIngredient,
//     name,
//     setName,
//     firstLetter,
//     setFirstLetter };
// }

// export default useFetchApi;
