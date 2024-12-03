import logo1 from '../../assets/img/logosyplacas/logo1.png'
import logo2 from '../../assets/img/logosyplacas/logo2.png'
import logo3 from '../../assets/img/logosyplacas/logo3.png'
import logo4 from '../../assets/img/logosyplacas/logo4.png'
import placa1 from '../../assets/img/logosyplacas/placa1.png'
import placa2 from '../../assets/img/logosyplacas/placa2.png'
import placa3 from '../../assets/img/logosyplacas/placa3.png'
import placa4 from '../../assets/img/logosyplacas/placa4.png'


export const Placasylogos = () => {
    return (
      <>
      <h2 className=" m-6 mt-0 font-sans border-b pb-3 text-white text-3xl text-purple-900 sm:text-4xl sm:leading-none">
             Placas y Logos
              </h2>
      <div className="flex justify-between gap-4">
  <div className="w-1/4 h-auto">
    <img src={logo1} className="w-full h-auto object-cover rounded-lg" alt="Descripción 1" />
  </div>
  <div className="w-1/4 h-auto">
    <img src={logo2}
    className="w-full h-auto object-cover rounded-lg" alt="Descripción 2" />
  </div>
  <div className="w-1/4 h-auto">
    <img src={logo3} className="w-full h-auto object-cover rounded-lg" alt="Descripción 3" />
  </div>
  <div className="w-1/4 h-auto">
    <img src={logo4} className="w-full h-auto object-cover rounded-lg" alt="Descripción 3" />
  </div>
</div>


<div className="flex justify-between gap-4">
  <div className="w-1/4 h-auto">
    <img src={placa1} className="w-full h-auto object-cover rounded-lg" alt="Descripción 4" />
  </div>
  <div className="w-1/4 h-auto">
    <img src={placa2} className="w-full h-auto object-cover rounded-lg" alt="Descripción 5" />
  </div>
  <div className="w-1/4 h-auto">
    <img src={placa3} className="w-full h-auto object-cover rounded-lg" alt="Descripción 6" />
  </div>
  <div className="w-1/4 h-auto">
    <img src={placa4} className="w-full h-auto object-cover rounded-lg" alt="Descripción 3" />
  </div>
</div>

    </>
    );
  };

  export default Placasylogos