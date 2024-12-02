import './App.css'
import Home from './src/components/home/home'
import { Route, Routes} from "react-router-dom"
import SobreMi from './src/components/sobreMi/sobreMi'
import NavBar from './src/components/navBar/navBar'
import Footer from './src/components/footer/footer'
import Estudios from './src/components/estudios/estudios'
import Experiencias from './src/components/experiencias/experiencias'
import Proyectos from './src/components/proyectos/proyectos'
import FormContacto from './src/components/formContacto./formContacto'


// function App() {
//  return (
// <div className='App'>
// <div className="background-video">
//       <video autoPlay loop muted playsInline>
//         <source src="./imagenes/video.mp4" type="video/mp4" />
       
//       </video>
      
//   <NavBar/>
//   <Routes>
//   <Route path='/' element={<Home/>} />
//   <Route path='/sobremi' element={<SobreMi/>} />
//   <Route path='/estudios' element={<Estudios/>} />
//   <Route path='/experiencias' element={<Experiencias/>} />
//   <Route path='/proyectos' element={<Proyectos/>} />
//   <Route path='/contacto' element={<FormContacto/>} />
//   </Routes>
//   <Footer/>
 
// </div>
//  </div>

//  )
// }

// function App() {
//   return (
//     <div className="App">
//       <div className="background-video">
//         <video autoPlay loop muted playsInline>
//           <source src="./imagenes/video.mp4" type="video/mp4" />
       
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/sobremi" element={<SobreMi />} />
//         <Route path="/estudios" element={<Estudios />} />
//         <Route path="/experiencias" element={<Experiencias />} />
//         <Route path="/proyectos" element={<Proyectos />} />
//         <Route path="/contacto" element={<FormContacto />} />
//       </Routes>
//       <Footer /> </video>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <div className="background-video">
        <video autoPlay loop muted playsInline>
          <source src="./videos/video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<FormContacto />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

