import React from 'react'
import { Card } from 'react-bootstrap'
import bookOne from '../assets/Images/book-1.jpg'
import { Link } from 'react-router-dom'
function BooksForExchange() {
  return (
    <>
    <Card style={{ width: '15rem' }} className='rounded'>
      <Link to={'/booksforexchange'}><Card.Img className='img-fluid rounded' style={{height:'15rem'}} variant="top" src={bookOne}/></Link>
      <Card.Body>
        <Card.Title>Memoirs of a Geisha</Card.Title>
        <Card.Title><h6>Author : Aurthur Golden</h6></Card.Title>
        <Card.Text>
          Exchange for : The Help by Kathyrn Stockett
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default BooksForExchange