import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { Toggle } from "./styled";

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const LightDarkToggle = (props: Props) => {
  return (
    <Toggle
      title="Toggle Light/Dark Mode"
      onClick={() => {
        props.toggleTheme();
      }}
    >
      <FontAwesomeIcon
        style={{ background: "inherit" }}
        icon={props.theme === "light" ? faMoon : faMoonSolid}
      />{" "}
      Dark Mode
    </Toggle>
  );
};

export default LightDarkToggle;
