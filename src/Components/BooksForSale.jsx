import React from 'react'
import { Card } from 'react-bootstrap'
import bookTwo from '../assets/Images/book-2.jpg'
import { Link } from 'react-router-dom'

function BooksForSale() {
  return (
    <>
    <Card style={{ width: '15rem' }} className='rounded'>
      <Link to={'/booksforsale'}><Card.Img className='img-fluid rounded' style={{height:'15rem'}} variant="top" src={bookTwo}/></Link>
      <Card.Body>
        <Card.Title>The City of Stardust</Card.Title>
        <Card.Title><h6>Author : Georgia Summers</h6></Card.Title>
        <Card.Text>
          Price : $ 230
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default BooksForSale