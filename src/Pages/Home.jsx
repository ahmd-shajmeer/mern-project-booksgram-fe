import React from 'react'
import { Link } from 'react-router-dom'
import booksgram from '../assets/Images/booksgram-1.jpg'
import BooksForExchange from '../Components/BooksForExchange'
import BooksForSale from '../Components/BooksForSale'

function Home() {
  return (
    <>
    {/* Landing Part */}
    <div style={{width:'100%',height:'100vh',backgroundImage:`linear-gradient(90deg, rgba(251,251,251,1) 49%, rgba(250,250,250,0) 87%),url(${booksgram})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
        <div style={{height:'100%'}} className="container">
            <div style={{height:'100%'}} className="row align-items-center">
                <div className="col-lg-5">
                    <h1>BooksGarm</h1>
                    <p>Amidst the whispers of pages turned, BooksGram beckons. A dance of ink and paper, where books find solace, and readers become poets of their own stories. Immerse in the lyrical symphony.</p>
                    <button className="btn btn-primary rounded-3"><Link style={{textDecoration:'none',color:'white'}} to={'/login'}>Let The Story Begin..</Link></button>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-5">
                </div>
            </div>
        </div>
    </div>
    {/* Books For Exchange */}
    <div className="container" style={{height:'30rem'}}>
        <h1 className='text-center'>Books For Exchange</h1>
        <div className='d-flex justify-content-between align-items-center'>
            <BooksForExchange/>
        </div>
        <div className='text-center'>
            <button className='btn text-primary'>View more books for Exchange</button>
        </div>
    </div>
    {/* Books for Sale */}
    <div className="container" style={{height:'30rem'}}>
        <h1 className='text-center'>Books For Sale</h1>
        <div className='d-flex justify-content-between align-items-center'>
            <BooksForSale/>
        </div>
        <div className='text-center'>
            <button className='btn text-primary'>View more books for Sale</button>
        </div>
    </div>
    </>
  )
}

export default Home