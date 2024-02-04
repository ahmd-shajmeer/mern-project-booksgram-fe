import React from 'react'
import bookThree from '../assets/Images/book-3.jpg'

function Book({insideSale}) {
  return (
    <>
    <div className="container">
        <div className="row mt-5">
            <div className="col-lg-5">
                <img src={bookThree} alt="" />
            </div>
            <div className="col-lg-6">
                <h1>Life of Pi</h1>
                <h3>Yann Martel</h3>
                <p><span className='fw-bolder'>About the Book:</span> Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor "Pi" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age. He survives 227 days after a shipwreck while stranded on a boat in the Pacific Ocean with a Bengal tiger named Richard Parker.</p>
                {
                insideSale?(<div className='mt-4'>
                    <h3>Price : $ 240</h3>
                    <button className="btn btn-success rounded">BUY NOW</button>
                </div>):(<div className='mt-4'>
                    <h3>Exchange for : The Day Tripper by James Goodhand</h3>
                    <button className="btn btn-info rounded">Exchange</button>
                </div>)}
            </div>
        </div>
    </div>
    </>
  )
}

export default Book