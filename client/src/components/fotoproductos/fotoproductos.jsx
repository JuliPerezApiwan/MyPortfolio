import fp1 from '../../assets/img/fotoproductos/fp1.png'
import fp2 from '../../assets/img/fotoproductos/fp2.png'
import fp3 from '../../assets/img/fotoproductos/fp3.png'
import fp4 from '../../assets/img/fotoproductos/fp4.png'
import fp5 from '../../assets/img/fotoproductos/fp5.png'
import fp6 from '../../assets/img/fotoproductos/fp6.png'


export const FotoProductos = () => {
    return (
      <>
      <h2 className="m-6 mt-0 font-sans border-b pb-3 text-white text-3xl text-purple-900 sm:text-4xl sm:leading-none">
             Foto Productos
              </h2>
      <div className="flex justify-between gap-4">
  <div className="w-1/3 h-auto">
    <img src={fp1} className="w-full h-auto object-cover rounded-lg" alt="Descripción 1" />
  </div>
  <div className="w-1/3 h-auto">
    <img src={fp2}
    className="w-full h-auto object-cover rounded-lg" alt="Descripción 2" />
  </div>
  <div className="w-1/3 h-auto">
    <img src={fp3} className="w-full h-auto object-cover rounded-lg" alt="Descripción 3" />
  </div>
</div>
<div className="flex justify-between gap-4">
  <div className="w-1/3 h-auto">
    <img src={fp4} className="w-full h-auto object-cover rounded-lg" alt="Descripción 4" />
  </div>
  <div className="w-1/3 h-auto">
    <img src={fp5} className="w-full h-auto object-cover rounded-lg" alt="Descripción 5" />
  </div>
  <div className="w-1/3 h-auto">
    <img src={fp6} className="w-full h-auto object-cover rounded-lg" alt="Descripción 6" />
  </div>
</div>

    </>
    );
  };

  export default FotoProductos