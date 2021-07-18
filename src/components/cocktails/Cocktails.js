import classes from "./Cocktails.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CocktailItem from "./CocktailItem";
import Search from "../search/Search";
function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchCocktail, setSearchCocktail] = useState("margarita");

  const getUrl = (searchInput) => {
    let url;
    url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

    if (searchInput.length === 1) {
      url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`;
    }
    if (searchInput.length > 1) {
      url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`;
    }
    return url;
  };

  useEffect(() => {
    setLoading(true);

    axios.get(getUrl(searchCocktail)).then((res) => {
      console.log(res.data.drinks);
      setCocktails(res.data.drinks);
      setLoading(false);
    });
  }, [searchCocktail]);

  return (
    <div>
      <h1>COCKTAILS</h1>
      <Search value={searchCocktail} onChange={setSearchCocktail} />
      {loading && <p>Loading...</p>}
      <div className={classes.container}>
        {!loading &&
          cocktails.map((cock) => (
            <CocktailItem
              key={cock.idDrink}
              id={cock.idDrink}
              name={cock.strDrink}
              glass={cock.strGlass}
              alcoholic={cock.strAlcoholic}
              img={cock.strDrinkThumb}
            />
          ))}
      </div>
    </div>
  );
}

export default Cocktails;
