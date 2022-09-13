import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import './search-box.styles.css'

function SearchBox({handlerChange}) {
  return (
    <div className="search-box-container">
      <SearchIcon className="searchIcon" sx={{ width: 50, height: 50 }} />
      <input
        className="search-box"
        placeholder="Search Character"
        onChange={handlerChange}
      />
    </div>
  );
}

export default SearchBox
