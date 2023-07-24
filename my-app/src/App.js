import React from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Home from './PAGES/Homepage/Home'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path= "/home" element ={<Home />}/>
      <Route path="*" element ={<div>
        <h1> 404 NOT FOUND</h1>
        </div>}/>
    </Routes>
    Home is Here! look no more
    </BrowserRouter>
  )
}

export default App