import React, { useEffect, useState } from "react";
import classes from "./Search.module.css";
import SearchIcon from "@material-ui/icons/Search";

function Search(props) {
  return (
    <div className={classes.search__container}>
      <form>
        <input
          className={classes.search}
          type="search"
          placeholder="Enter cocktail"
          value={props.value}
          onChange={(e) => props.onChange(String(e.target.value))}
        />
      </form>
      <SearchIcon fontSize="small" />
    </div>
  );
}

export default Search;
