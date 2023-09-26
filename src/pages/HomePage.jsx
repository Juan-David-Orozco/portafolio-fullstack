export function HomePage() {
  return (
    <>
      <main>
        <h1 className='text-white text-center pt-4'>Portafolio Desarrollador FullStack</h1>
        <div className="row mx-auto mt-5 align-items-center justify-content-center">
          <div className="col-sm-12 col-md-4 col-lg-8 mx-auto">
            <div className="card bg-light my-2">
              <div className="card-body">
                <h3 className="card-title">FrontEnd</h3>
                <p className="card-text">Proyectos y Ejemplos implementando tecnologias FrontEnd</p>
                <a href="#" className="card-link">Ver más</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-8 mx-auto">
            <div className="card bg-light my-2">
              <div className="card-body">
                <h3 className="card-title">BackEnd</h3>
                <p className="card-text">API's y aplicaciones MVC desde el servidor</p>
                <a href="#" className="card-link">Ver más</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-8 mx-auto">
            <div className="card bg-light my-2">
              <div className="card-body">
                <h3 className="card-title">FullStack</h3>
                <p className="card-text">Aplicaciones FullStack con servidores de desarrollo Back y Front</p>
                <a href="#" className="card-link">Ver más</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
