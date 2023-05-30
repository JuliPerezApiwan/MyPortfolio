import './App.css'
import Home from './components/home/home'
import { Route, Routes} from "react-router-dom"
import SobreMi from './components/sobreMi/sobreMi'
import NavBar from './components/navBar/navBar'
import Footer from './components/footer/footer'
import Estudios from './components/estudios/estudios'
import Experiencias from './components/experiencias/experiencias'
import Proyectos from './components/proyectos/proyectos'
import FormContacto from './components/formContacto./formContacto'


function App() {
 return (
<div>
  <NavBar/>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/sobremi' element={<SobreMi/>} />
  <Route path='/estudios' element={<Estudios/>} />
  <Route path='/experiencias' element={<Experiencias/>} />
  <Route path='/proyectos' element={<Proyectos/>} />
  <Route path='/contacto' element={<FormContacto/>} />
  </Routes>
  <Footer/>
</div>


 )
}

export default App
