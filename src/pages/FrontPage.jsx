import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { requestGetProjects } from "../services/requests";

export function FrontPage() {

  const [projects, setProjects] = useState([])

  const getProjects = async () => {
    const result = await requestGetProjects()
    const docs = []
    result.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
      //setProjects(...projects, doc.data())
      docs.push({id: doc.id, ...doc.data()})
    });
    setProjects(docs)
  }

  useEffect(() => {
    getProjects();
  }, [])

  return (
    <>
      <main>
        <div className="row align-items-center justify-content-center no-gutters mx-auto">
          <div className="col-12 mx-auto">
            <div className="card">
              <div className="card-header d-flex justify-content-between bg-dark text-white">
                <h4 className="card-title my-auto">Portafolio FrontEnd</h4>
                <Link to={"/portafolio-fullstack"} className="btn btn-light btn-sm my-auto" >Volver a Inicio</Link>
              </div>
              <div className="card-body">
                <h5>Bienvenido!!!</h5>
                <p className="card-text">
                  Realiza un recorrido para revisar cada uno de los proyectos los cuales
                  emplean tecnologias modernas o frameworks para el desarrollo de interfaces
                  web que se adapten a las necesidades de los usuarios.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-auto align-items-center no-gutters">
          <div className="col-12 mx-auto bg-light p-5">
            <div className="row mx-auto align-items-center no-gutters">
              {
                projects.map((project) => (
                  <div className="col-12 col-sm-10 col-md-6 col-lg-4 p-2 mx-auto" key={project.id}>
                    <div className="card border border-dark">
                      <div className="card-header bg-secondary d-flex justify-content-between">
                        <h6 className="mb-0" >{project.title}</h6>
                        <img src={project.frame} className="icon" />
                      </div>
                      <div className="card-body">
                        <p className="pb-5" >{project.content}</p>
                        <p>
                          <Link to={project.web} target="_blank" className="btn btn-outline-primary btn-sm mr-1">
                            <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695936013/portfolio/rczxshnaxdvakbrbs6hd.png" className="icon" />
                          </Link>
                          <span>Sitio Web</span>
                        </p>
                        <p>
                          <Link to={project.github} target="_blank" className="btn btn-outline-dark btn-sm mr-1">
                            <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695932058/portfolio/a3w1xhhdqdjm4shgb5gn.png" className="icon" />
                          </Link>
                          <span>Portafolio</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
