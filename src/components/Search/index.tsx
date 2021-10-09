import React, { ChangeEvent } from "react";
import { SearchContainer } from "./Search.styled";
import { SearchBar, Filter } from "../../components";

interface Props {
  currentSearch: string;
  searchChanged: (e: ChangeEvent<HTMLInputElement>) => void;
  filterChanged: (region: string) => void;
  currentRegion: string;
}

const Search = (props: Props) => {
  return (
    <SearchContainer>
      <SearchBar
        currentSearch={props.currentSearch}
        searchChanged={props.searchChanged}
      />
      <Filter
        filterChanged={props.filterChanged}
        currentRegion={props.currentRegion}
      />
    </SearchContainer>
  );
};

export default Search;
