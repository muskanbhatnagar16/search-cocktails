import classes from "./CocktailItem.module.css";
import React from "react";
import Card from "../ui/Card";
import { useHistory } from "react-router";

function CocktailItem({ id, name, glass, alcoholic, img }) {
  const history = useHistory();

  const cocktailClickedHandler = (id) => {
    console.log("Clicked");
    history.push(`/details/${id}`);
  };
  return (
    <Card>
      <article
        onClick={() => cocktailClickedHandler(id)}
        className={classes.cocktail}
      >
        <img src={img} className={classes.cocktail__img} />
        <h1 className={classes.cocktail__name}>{name}</h1>
        <h3 className={classes.cocktail__glass}>{glass}</h3>

        <p className={classes.cocktail__alcoholic}>{alcoholic}</p>
      </article>
    </Card>
  );
}

export default CocktailItem;
