import React from 'react'
import { Card } from 'react-bootstrap'

function NoteCard({note, date}) {
  return (
    <>
        <Card>
            <Card.Header>{note.user} on {date}</Card.Header>
            <Card.Body>
                <Card.Text>{note.text}</Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}

export default NoteCard