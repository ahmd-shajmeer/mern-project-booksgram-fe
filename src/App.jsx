import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Exchanges from './Pages/Exchanges'
import Sell from './Pages/Sell'
import Dashboard from './Pages/Dashboard'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Book from './Pages/Book'

function App() {
 
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister />} />
        <Route path='/exchange' element={<Exchanges/>} />
        <Route path='/sell' element={<Sell/>} />
        <Route path='/booksforexchange' element={<Book/>} />
        <Route path='/booksforsale' element={<Book insideSale/>} />
        <Route path='/profile' element={<Dashboard/>} />
        <Route path='/tosale' element={<Dashboard inToSale />} />
        <Route path='/toexchange' element={<Dashboard inToExchange />} />
        <Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
