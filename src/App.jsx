import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { useState } from 'react'
import { Cartfile } from './Components/Cartfile'

function App() {
  const[ Cart , SetCart] = useState([]);

  return (
    <>
      <BrowserRouter>

      <Header Cart={Cart} />
      <div className="container">
      <Routes>
        <Route path='/' element={<Home Cart={Cart} SetCart={SetCart}/>}  />
        <Route path='/Cart' element={<Cartfile Cart={Cart}SetCart={SetCart}/>} />
      </Routes>
      </div>  
      </BrowserRouter>
    </>
  )
}

export default App
