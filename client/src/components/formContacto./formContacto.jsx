import emailjs from "@emailjs/browser"
import swal from 'sweetalert2';


export const FormContacto = () => {
  const SERVICE_ID  = "service_julieta"
  const TEMPLATE_ID = "template_3rj8y3i"
  const USER_ID = "nLCmvaoyV_jJsnBFW"


  const sendEmail = (event) => {
    event.preventDefault();
 
    const form = event.target;
    const nombre = form.elements["nombre"].value;
    const apellido = form.elements["apellido"].value;
    const email = form.elements["email"].value;
    const telefono = form.elements["telefono"].value;
    const mensaje = form.elements["mensaje"].value;
  
    if (!nombre || !apellido || !email || !telefono || !mensaje) {
      new swal({
        text:'Por favor complete los campos requeridos', 
        type: 'error'
      });
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      new swal({
        text:'Por favor ingrese un correo electrónico válido', 
        type: 'error'
      });
      return;
    }

    emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,form,USER_ID)
    .then(new swal({text:'Mensaje Enviado', type:'success'}))
    .then(response => {
      console.log(response.text);
      form.reset();
    })
    .catch(error => console.log(error))

  }
  

  return (
    <div className="isolate bg-opacity-90 py-12 lg:px-8">
      
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl tracking-tight text-white sm:text-5xl"> Contacto ✍︎ </h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-8 max-w-xl" onSubmit={sendEmail}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="nombre" className="block text-sm font-semibold leading-6 text-white">
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="nombre"
                id="nombre"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="apellido" className="block text-sm font-semibold leading-6 text-white">
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="apellido"
                id="apellido"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="telefono" className="block text-sm font-semibold leading-6 text-white">
              Telefono (opcional)
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="telefono"
                id="telefono"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="mensaje" className="block text-sm font-semibold leading-6 text-white">
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                name="mensaje"
                id="mensaje"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormContacto