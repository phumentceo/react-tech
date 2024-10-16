import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './view/Home'
import './components/assets/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './view/About'
import Contact from './view/Contact'
function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path='/about' element={ <About/> }/>
            <Route path='/contact' element={ <Contact/> }/>
          </Routes>
       </BrowserRouter>
       
    </>
  )
}
export default App
