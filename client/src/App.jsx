import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Home from './views/Home'
import BearTrax from './views/BearTrax'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beartrax' element={<BearTrax/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
