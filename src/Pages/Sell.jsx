import React from 'react'
import { Row, Col } from 'react-bootstrap'
import BooksForSale from '../Components/BooksForSale'

function Sell() {
  return (
    <>
    <div className="conatiner mt-5">
        <Row className='mx-auto'>
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
                <BooksForSale/>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Sell