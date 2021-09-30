import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Button, A } from "./Button.styled";

interface Props {
  href: string;
  title?: string | Component;
  margin?: string;
  padding?: string;
}

const BackButton = (props: Props) => {
  return (
    <A href={props.href}>
      <Button margin={props.margin} padding={props.padding}>
        {props.href === "/" ? (
          <>
            <FontAwesomeIcon icon={faLongArrowAltLeft} /> Back
          </>
        ) : (
          props.title
        )}
      </Button>
    </A>
  );
};

export default BackButton;
