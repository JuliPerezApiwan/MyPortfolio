const products = [
  {
    id: 1,
    name: 'Sobre mi',
    href: '#',
    imageSrc: '',
  },
  {
    id: 1,
    name: 'Estudios',
    href: '#',
  },
  {
    id: 2,
    name: 'Experiencias',
    href: '#',
  },
  {
    id: 3,
    name: 'Proyectos',
    href: '#',
  },
  // More products...
]

export default function Secciones () {
  return (
    <div >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 rounded-full  aspect-w-1 overflow-hidden  w-[18rem] bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <div>
                <br/>
                  <h1 className="text-xl text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h1>
                </div>
              <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover  object-center lg:h-full lg:w-full"
                />
                
              </div>
              <div className="mt-4 flex justify-between">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

