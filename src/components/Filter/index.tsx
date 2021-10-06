import React, { useState } from "react";
import {
  DropDownButton,
  DropDownIcon,
  DropDownBox,
  DropDownItem,
  DropDownBack,
} from "./Filter.styled";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Div } from "../shared";

interface Props {
  filterChanged: (region: string) => void;
  currentRegion: string;
}

const Filter = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pickRegion = (newRegion: string): void => {
    props.filterChanged(newRegion);
    setMenuOpen(false);
  };

  return (
    <Div width="200px" position="relative">
      <DropDownButton
        title="Filter by Region"
        name="region"
        onClick={() => {
          menuOpen ? setMenuOpen(false) : setMenuOpen(true);
        }}
      >
        {props.currentRegion === "" ? "Filter by Region" : props.currentRegion}

        <DropDownIcon>
          <FontAwesomeIcon icon={faChevronDown} />
        </DropDownIcon>
      </DropDownButton>
      <DropDownBox visibility={menuOpen ? "visible" : "hidden"}>
        {props.currentRegion === "" ? null : (
          <DropDownItem
            onClick={() => {
              pickRegion("");
            }}
          >
            None
          </DropDownItem>
        )}
        <DropDownItem
          onClick={() => {
            pickRegion("Africa");
          }}
        >
          Africa
        </DropDownItem>
        <DropDownItem
          onClick={() => {
            pickRegion("Americas");
          }}
        >
          Americas
        </DropDownItem>
        <DropDownItem
          onClick={() => {
            pickRegion("Asia");
          }}
        >
          Asia
        </DropDownItem>
        <DropDownItem
          onClick={() => {
            pickRegion("Europe");
          }}
        >
          Europe
        </DropDownItem>
        <DropDownItem
          onClick={() => {
            pickRegion("Oceania");
          }}
        >
          Oceania
        </DropDownItem>
      </DropDownBox>
      <DropDownBack
        display={menuOpen ? "block" : "none"}
        onClick={() => setMenuOpen(false)}
        tabIndex={-1}
      />
    </Div>
  );
};

export default Filter;
