import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function GoToButton(props) {
    let navigate = useNavigate();
  return (
    <>
      <Button variant="primary"
        onClick={() => {
            navigate(props.path)
        }}
        >
            {`Go to ${props.element}`}
      </Button>
    </>

  )
}

export default GoToButton
