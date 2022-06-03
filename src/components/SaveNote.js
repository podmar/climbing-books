import React from 'react'

function SaveNote() {
  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add a note</Form.Label>
              <Form.Control type="text" placeholder="What would you like to remember about this book?" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save the note
            </Button>
          </Form>
    </>
  )
}

export default SaveNote