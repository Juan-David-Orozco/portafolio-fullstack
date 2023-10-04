import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <main>
        <div className="row m-auto justify-content-center align-items-center">
          <div className="col-12 mx-auto bg-light text-center p-4">
            <img id="img-notfound" className="p-5" src="https://res.cloudinary.com/cloud-juan/image/upload/v1696438687/portfolio/ioryjpcmd1nzdw07x5ht.png" />
            <p>
              <Link to={"/portafolio-fullstack"} className="btn btn-primary my-auto" >Volver a Inicio</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
