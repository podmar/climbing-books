import React from 'react';
import { useNavigate } from 'react-router-dom';

function GoToButton(props) {
    let navigate = useNavigate();
  return (
    <>
        <button
        onClick={() => {
            navigate(props.path)
        }}
        >
            {`Go to ${props.element}`}
        </button>
    </>

  )
}

export default GoToButton
