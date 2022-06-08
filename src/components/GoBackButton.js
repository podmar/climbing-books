import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

function GoBackButton() {
    const navigate = useNavigate()
  return (
    <>
        <Button
        className='d-flex text-primary'
        variant="outline-none"
        onClick={() => {
            navigate(-1)
        }}
        >
            <span className="material-symbols-outlined">keyboard_double_arrow_left</span>
        </Button>
    </>
  )
}

export default GoBackButton