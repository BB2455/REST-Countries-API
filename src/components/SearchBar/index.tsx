import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent } from "react";
import { InputBar, Input, Icon } from "./SearchBar.styled";

interface Props {
  currentSearch: string;
  searchChanged: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = (props: Props) => {
  return (
    <InputBar role="search" id="searchBar">
      <Input
        type="text"
        placeholder="Search for a country..."
        title="Search for a country"
        value={props.currentSearch === "" ? "" : props.currentSearch}
        onChange={(e) => {
          props.searchChanged(e);
        }}
      />
      <Icon>
        <FontAwesomeIcon icon={faSearch} />
      </Icon>
    </InputBar>
  );
};

export default SearchBar;
