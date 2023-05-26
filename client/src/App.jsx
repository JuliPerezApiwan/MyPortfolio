import './App.css'
import Home from './components/home/home'
import { Route, Routes} from "react-router-dom"
import SobreMi from './components/sobreMi/sobreMi'
import NavBar from './components/navBar/navBar'
import Footer from './components/footer/footer'
import Estudios from './components/estudios/estudios'
import Experiencias from './components/experiencias/experiencias'
import Proyectos from './components/proyectos/proyectos'


function App() {
 return (
<div className='App'>
  <NavBar/>
  <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[44rem] w-[44rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={45} cy={45} r={2800} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.5" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
  </svg>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/sobremi' element={<SobreMi/>} />
  <Route path='/estudios' element={<Estudios/>} />
  <Route path='/experiencias' element={<Experiencias/>} />
  <Route path='/proyectos' element={<Proyectos/>} />
  </Routes>
  
  <Footer/>
</div>


 )
}

export default App
