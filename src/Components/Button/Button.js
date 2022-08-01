import React from "react";
import { Button } from "react-bootstrap";
import './Button.css'


export default function AddButton ({ textOnBtn, handleClick }) {
  return (
    <>
      <Button variant="outline-secondary" onClick={handleClick} className="btnCustom">
        {textOnBtn}
      </Button>
    </>
  );
}