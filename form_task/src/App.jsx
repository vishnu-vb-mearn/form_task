import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Header from './components1/Header'
import Footer from './components1/Footer'
import FinalPage from './pages/FinalPage'

function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/form' element={<FinalPage/>} />
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
