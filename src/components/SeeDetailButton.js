import React from 'react'
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
    </>
  )
}

export default SeeDetailButton