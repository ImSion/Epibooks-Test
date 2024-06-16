import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import {React, useState}from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import fantasy from './Books/fantasy.json'
import BookDetail from './components/BookDetail'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Welcome from './components/Welcome';

function App() {

  const [search, setSearch] = useState('')
  const [type, setType] = useState('fantasy')

  return (
    <>
      <BrowserRouter>
        
        <Nav search={search} setSearch={setSearch} />
        <Welcome/>
  
        <Routes>
          <Route path='/' element={<Home setType={setType} type={type} books={fantasy} search={search} />} />
          <Route path='/details/:asin' element={<BookDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
  
      </BrowserRouter>  
    </>
  )
}

export default App
