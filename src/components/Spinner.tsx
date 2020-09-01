import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Spinner: React.FC = (props) => {
  return <FontAwesomeIcon icon={faCircleNotch} spin className="mx-2" />;
};
