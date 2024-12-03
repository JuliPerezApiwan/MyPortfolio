export const Footer = () => {
    return (
      <div className="footer">
      <div className="bg-[black] m-0 px-10  ">
<div className="datos">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-2 w-500">
        <div className="sm:col-span-2">
          </div>
          <div className="space-y-2 text-sm ">
            
            <div className="flex">
              <p className="mr-1 text-white">Telefono:</p>
              <a
                
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +54 2945 557886
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-white">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                julieta.perezapiwan@gmail.com
              </a>
            </div>
          </div>
          <div>
          <div className="space-y-2 text-sm">
            
            <div className="flex justify-end">
              <p className="mr-1 text-white">Github:</p>
              <a
                href="https://www.github.com/JuliPerezApiwan"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                github.com/JuliPerezApiwan
              </a>
            </div>
            <div className="flex justify-end">
              <p className="mr-1 text-white">Linkedin:</p>
              <a
              href="https://www.linkedin.com/in/julietaperezapiwan"
                aria-label="linkedin"
                title="linkedin"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                linkedin.com/in/julietaperezapiwan
              </a>
            </div>
           
          </div>

          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <div className="name">
          <p className="text-sm text-white">
            Julieta Perez Apiwan
          </p>
          </div>
        </div>
        </div>
      </div>
      </div>
    );
  };

  export default Footer