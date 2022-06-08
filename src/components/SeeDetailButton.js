import React from 'react'
import { Button } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function SeeDetailButton(props) {
    let navigate = useNavigate();

  return (
    <>
        <Button 
        size="jg"
        className='text-primary'
        variant="outline-none"
        onClick={() => {
            navigate(`/detail/${props.id}`)
        }}
        >
            {/* {`More `} */}
            <ArrowRight/>
        </Button>
    </>
  )
}

export default SeeDetailButton