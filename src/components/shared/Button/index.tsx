import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button } from "./Button.styled";
import { Link } from "react-router-dom";

interface Props {
  href: string;
  title?: string | Component;
  margin?: string;
  padding?: string;
  name?: string;
  width?: string;
}

const BackButton = (props: Props) => {
  return (
    <Link to={props.href} title={props.name}>
      <Button margin={props.margin} padding={props.padding} width={props.width}>
        {props.href === "/" ? (
          <>
            <FontAwesomeIcon icon={faLongArrowAltLeft} /> Back
          </>
        ) : (
          props.title
        )}
      </Button>
    </Link>
  );
};

export default BackButton;
