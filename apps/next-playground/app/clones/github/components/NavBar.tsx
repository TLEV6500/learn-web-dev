import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function NavBar() {
  return (
    <div className={"min-h-64 flex flex-row"}>
      <FontAwesomeIcon icon={faGithub} height={"20px"} />
      NavBar
    </div>
  );
}
