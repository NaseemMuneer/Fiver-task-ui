import React from "react";
import Nav from "./Nav";

function Index(props) {
  return (
    <>
      <Nav>{props.children}</Nav>
    </>
  );
}

export default Index;
