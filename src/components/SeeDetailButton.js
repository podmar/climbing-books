import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SeeDetailButton(props) {
    let navigate = useNavigate();

  return (
    <>
        <Button 
        size="sm"
        variant="outline-primary"
        onClick={() => {
            navigate(`/detail/${props.id}`)
        }}
        >
            {`Read more`}
        </Button>
    </>
  )
}

export default SeeDetailButton