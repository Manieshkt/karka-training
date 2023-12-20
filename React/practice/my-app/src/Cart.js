import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Cart = ({propb}) => {
  return (
    <>
     <Link to="/Cart" ><button className="carta" >
        <FontAwesomeIcon icon={faCartShopping} size="2x"/>
        <b>{propb}</b>
      </button></Link>
    </>
  );
};