import classes from "./Cocktails.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CocktailItem from "./CocktailItem";
import Search from "../search/Search";

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchCocktail, setSearchCocktail] = useState("");
  const [cocktailNotFound, setCocktailNotFound] = useState(false);

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

    const timer = setTimeout(() => {
      axios.get(getUrl(searchCocktail)).then((res) => {
        console.log("SENDING REQ");
        if (res.data.drinks === null) {
          setLoading(false);
          setCocktailNotFound(true);
          return;
        }
        setCocktailNotFound(false);
        setCocktails(res.data.drinks);
        setLoading(false);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchCocktail]);

  return (
    <div>
      <Search value={searchCocktail} onChange={setSearchCocktail} />
      {loading && <p>Loading...</p>}
      <div className={classes.container}>
        {cocktailNotFound && (
          <p>No cocktail exists with this name. Please try another one!</p>
        )}
        {!loading &&
          !cocktailNotFound &&
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
