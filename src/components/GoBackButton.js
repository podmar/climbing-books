import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        className="d-flex text-primary"
        variant="outline-none"
        onClick={() => {
          // ! there should be an other parameter to avoid going back to a non protected route
          // ! example: you login, then go to home, then click to go back and it brings you back to the login which is a bit weird (try it)
          // ! investigate if you want and try fixing it
          navigate(-1);
        }}
      >
        <span className="material-symbols-outlined">
          keyboard_double_arrow_left
        </span>
      </Button>
    </>
  );
}

export default GoBackButton;
