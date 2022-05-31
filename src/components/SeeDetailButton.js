import React from 'react'
// import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SeeDetailButton(props) {
    let navigate = useNavigate();

  return (
    <>
        <button
        onClick={() => {
            navigate(`detail/${props.id}`)
        }}
        >
            {`Read more`}
        </button>

    {/* <Button
      onClick={() => {
      navigate(`detail/${props.id}`)
      }}
    >
    {`Read more`}
    </Button> */}
    </>
  )
}

export default SeeDetailButton