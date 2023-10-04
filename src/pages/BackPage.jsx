import { Link } from "react-router-dom";

export function BackPage() {
  return (
    <>
      <main>
        <div className="row mx-auto justify-content-center">
          <div className="col-12 mx-auto bg-danger text-white d-flex justify-content-between p-2 rounded">
            <h4 className="mb-0 my-auto">Portafolio BackEnd</h4>
            <Link to={"/portafolio-fullstack"} className="btn btn-light btn-sm my-auto" >Volver a Inicio</Link>
          </div>
        </div>
        <div className="row align-items-center justify-content-center no-gutters mx-auto bg-light py-5 mt-2">
          <div className="col-12 col-sm-6 mx-auto text-center px-2">
            <img id="img-backend" className="p-3" src="https://res.cloudinary.com/cloud-juan/image/upload/v1695877135/portfolio/bgn4wzai6gb5xsnn4x5s.png" />
          </div>
          <div className="col-12 col-sm-6 mx-auto px-4">
            <h5 className="text-center p-4" >Esta sección se encuentra en desarrollo muchas gracias por su comprensión</h5>
          </div>
        </div>
      </main>
    </>
  )
}
