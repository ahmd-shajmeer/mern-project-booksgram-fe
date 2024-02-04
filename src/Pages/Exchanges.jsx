import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BooksForExchange from '../Components/BooksForExchange'

function Exchanges() {
  return (
    <>
    <div className="conatiner mt-5">
        <Row className='mx-auto'>
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <BooksForExchange/>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Exchanges