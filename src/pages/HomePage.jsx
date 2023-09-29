import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <>
      <main>
        <h1 id="title-portafolio" className='text-light text-center pt-4'>Portafolio Desarrollador FullStack</h1>
        <div className="row mx-auto align-items-center justify-content-center">
          <div className="col-sm-9 col-md-6 mx-auto mt-3 mb-5">

            <div id="carouselMain" className="carousel slide" data-ride="carousel">

              <ol className="carousel-indicators">
                <li data-target="#carouselMain" data-slide-to="0" className="active"></li>
                <li data-target="#carouselMain" data-slide-to="1"></li>
              </ol>

              <div className="carousel-inner">

                <div className="carousel-item active">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between bg-dark text-white px-4">
                      <h3 className="mb-0 my-auto">FrontEnd</h3>
                      <img id="front-icon" className="d-block my-auto header-icons" src="https://res.cloudinary.com/cloud-juan/image/upload/v1695846285/portfolio/nojjfgo89hfsxfykhpia.png" alt="Frontend Icon" />
                    </div>
                    <div className="card-body text-secondary bg-light text-center">
                      <img className="px-5 py-3 main-images" src="https://res.cloudinary.com/cloud-juan/image/upload/v1695845940/portfolio/f8raheskzsowmgfkfmof.png" alt="Frontend image cap" />
                      <p className="card-text pt-2 mb-4">Proyectos y ejemplos FrontEnd implementando tecnologías</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                          <span>HTML 5</span>
                          <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695851642/portfolio/rdayw2k5rqyq6hxuaiw0.png" className="icon-front" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>CSS 3</span>
                          <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695851750/portfolio/aeoet3h4gfphwcwd8p4p.png" className="icon-front" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>JavaScript</span>
                          <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695867674/portfolio/zwsy1aodaj1vhwj0gy27.png" className="icon-front" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>Bootstrap</span>
                          <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695867861/portfolio/l9xfdvvqj7eufvr6cxsg.png" className="icon-front" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>React</span>
                          <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695931744/portfolio/dgtkrant9zr8zg27zwrr.png" className="icon-front" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>Vue</span>
                          <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695868426/portfolio/iob1ckkqqmfvnhnbcp1e.png" className="icon-front" />
                        </li>
                      </ul>
                      <Link to="/portafolio-fullstack/frontend" className="btn btn-dark btn-block text-white mt-4 mb-1">Ver más</Link>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between bg-danger text-white px-4">
                      <h3 className="mb-0 my-auto">BackEnd</h3>
                      <img id="back-icon" className="d-block my-auto header-icons" src="https://res.cloudinary.com/cloud-juan/image/upload/v1695879298/portfolio/h1cgk1dh7pfxdctx9xtt.png" alt="Backend Icon" />
                    </div>
                    <div className="card-body text-secondary bg-light text-center">
                      <img className="px-5 py-3 main-images" src="https://res.cloudinary.com/cloud-juan/image/upload/v1695876110/portfolio/uxbhxnvn6puwz5x9zcsp.png" alt="Backend image cap" />
                      <p className="card-text pt-2 mb-4">API's y aplicaciones MVC desde el servidor</p>
                      <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item d-flex justify-content-between">
                          <span>Node</span>
                          <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695996486/portfolio/x3oe6vaie1vhpvjq8jjm.png" className="icon-back" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>Nest</span>
                          <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695877900/portfolio/htyaxk6nipkkfoa4w3ap.png" className="icon-back" />
                        </li>
                      </ul>
                      <p className="card-text text-center mb-4">Implementacion de bases de datos SQL y NoSQL</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                          <span>MySQL</span>
                          <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695994092/portfolio/xbdpaexsslsvsbp6ihn2.png" className="icon-back" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>PostgreSQL</span>
                          <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695995315/portfolio/xebt39jacvs3nhddkqgi.png" className="icon-back" />
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>MongoDB</span>
                          <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695993596/portfolio/xk8xhroxeqn0ng8obvym.png" className="icon-back" />
                        </li>
                      </ul>
                      <Link to="/portafolio-fullstack/backend" className="btn btn-danger btn-block text-white mt-4 mb-1">Ver más</Link>
                    </div>
                  </div>
                </div>

              </div>

              <a className="carousel-control-prev d-none d-sm-flex" href="#carouselMain" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next d-none d-sm-flex" href="#carouselMain" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>

            </div>

          </div>
        </div>
      </main>
    </>
  )
}
