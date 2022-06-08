import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

function GoBackButton() {
    const navigate = useNavigate()
  return (
    <>
        <Button 
        size="lg"
        className='d-flex'
        variant="outline-primary"
        onClick={() => {
            navigate(-1)
        }}
        >
            <span class="material-symbols-outlined">keyboard_double_arrow_left</span>
        </Button>
    </>
  )
}

export default GoBackButton