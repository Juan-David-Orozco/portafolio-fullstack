import { Link } from "react-router-dom";

export function FrontPage() {
  return (
    <>
      <main>
        <div className="row mx-auto align-items-center justify-content-center no-gutters">
          <div className="col-11 col-sm-10 col-md-9 mx-auto text-center my-5">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Bienvenido!</h4>
                <h6 className="card-subtitle mb-2 text-muted">Portafolio FrontEnd</h6>
                <p className="card-text">
                  Realiza un recorrido para revisar cada uno de los proyectos los cuales
                  emplean tecnologias modernas o frameworks para el desarrollo de interfaces
                  web que se adapten a las necesidades de los usuarios.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-auto align-items-center justify-content-center">
          <div className="col-md-4 p-2">

          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5>webservice-dragdrop-react</h5>
              <Link to={"https://webservice-dragdrop-react.vercel.app/"} className="btn btn-sm" target="_blank">
                Visitar
              </Link>
            </div>
            
          </div>

          </div>
        </div>
      </main>
    </>
  )
}
