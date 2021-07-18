import React, { useEffect, useState } from "react";

function Search(props) {
  return (
    <form>
      <input
        type="search"
        placeholder="Search"
        value={props.value}
        onChange={(e) => props.onChange(String(e.target.value))}
      />
    </form>
  );
}

export default Search;
