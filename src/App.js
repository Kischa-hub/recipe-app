import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = "811f8fe1";
  const APP_KEY = "c06a149c9ce4cb25c0e113c72546ed50";

  const [recipes, setRecipes] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [query, setQuery] = useState("");
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearchWord(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchWord);
    setSearchWord("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          value={searchWord}
          className="search-bar"
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            imageSrc={recipe.recipe.image}
            calories={recipe.recipe.calories}
            key={recipe.totalWeight}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
