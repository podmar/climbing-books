import React from 'react'
import { Button } from 'react-bootstrap'
import { Book } from 'react-bootstrap-icons'

function FavButton() {

  return (
    <>
    <Button
        size='lg'
        variant='outline-none'
        color='primary'
        >
        <Book className='text-primary'/>
    </Button>
    </>
  )
}

export default FavButton