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

interface Props {}

const Filter = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [region, setRegion] = useState("");

  const pickRegion = (newRegion: string): void => {
    setRegion(newRegion);
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
        {region === "" ? "Filter by Region" : region}

        <DropDownIcon>
          <FontAwesomeIcon icon={faChevronDown} />
        </DropDownIcon>
      </DropDownButton>
      <DropDownBox visibility={menuOpen ? "visible" : "hidden"}>
        {region === "" ? null : (
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
            pickRegion("America");
          }}
        >
          America
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
