import classes from "./Details.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../ui/Card";

function Details() {
  const params = useParams();
  const id = params.cocktailId;
  const [cocktail, setCocktail] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setCocktail(res.data.drinks[0]);
        setLoading(false);
      });
  }, []);
  const {
    strDrink: name,
    strDrinkThumb: img,
    strInstructions: description,
    strGlass: glass,
    strCategory: category,
    strAlcoholic: alcoholic,
  } = cocktail;
  const ingredients = {
    ing1: cocktail.strIngredient1,
    ing2: cocktail.strIngredient2,
    ing3: cocktail.strIngredient3,
  };
  return (
    <div>
      {loading && <p>Loading</p>}
      {!loading && (
        <div className={classes.container}>
          <div>
            <img className={classes.cocktail__img} src={img} />
          </div>
          <Card>
            <div className={classes.cocktail}>
              <h4 className={classes.cocktail__display}>Name:</h4>
              <p className={classes.cocktail__display}>{name}</p>
            </div>
            <div>
              <h4 className={classes.cocktail__display}>Category:</h4>
              <p className={classes.cocktail__display}>{category}</p>
            </div>
            <div>
              <h4 className={classes.cocktail__display}>Alcoholic:</h4>
              <p className={classes.cocktail__display}>{alcoholic}</p>
            </div>
            <div>
              <h4 className={classes.cocktail__display}>Glass Type:</h4>
              <p className={classes.cocktail__display}>{glass}</p>
            </div>
            <div>
              <h4 className={classes.cocktail__display}>Ingredients:</h4>
              <p className={classes.cocktail__display}>
                {`${ingredients.ing1 || ""}, ${ingredients.ing2 || ""}, ${
                  ingredients.ing3 || ""
                }`}
              </p>
            </div>
            <div>
              <h4 className={classes.cocktail__display}>How to make:</h4>
              <p className={classes.cocktail__display}>{description}</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Details;
