import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { InputBar, Input, Icon } from "./SearchBar.styled";

interface Props {}

const SearchBar = (props: Props) => {
  return (
    <InputBar role="search" id="searchBar">
      <Input type="text" placeholder="Search for a country..." />
      <Icon>
        <FontAwesomeIcon icon={faSearch} />
      </Icon>
    </InputBar>
  );
};

export default SearchBar;
