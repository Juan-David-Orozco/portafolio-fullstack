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
        <div className="row align-items-center justify-content-center no-gutters mx-auto px-1">
          <div className="col-12 mx-auto text-center my-1">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h4 className="card-title my-auto">Portafolio FrontEnd</h4>
                <Link to={"/portafolio-fullstack"} className="btn btn-dark my-auto" >Volver a Inicio</Link>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Realiza un recorrido para revisar cada uno de los proyectos los cuales
                  emplean tecnologias modernas o frameworks para el desarrollo de interfaces
                  web que se adapten a las necesidades de los usuarios.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-auto align-items-center justify-content-center no-gutters px-1">
          <div className="col-12 mx-auto text-center bg-light my-1 mx-auto p-4">
            <div className="row mx-auto align-items-center justify-content-center no-gutters">
              {
                projects.map((project) => (
                  <div className="col-12 col-sm-10 col-md-6 p-2 mx-auto" key={project.id}>
                    <div className="card border border-dark">
                      <div className="card-header bg-dark text-white d-flex justify-content-between">
                        <h6 className="mb-0" >{project.title}</h6>
                        <img src={project.frame} className="icon" />
                      </div>
                      <div className="card-body d-flex justify-content-between text-justify">
                        <p>{project.content}</p>
                      </div>
                      <div className="card-footer d-flex justify-content-around">
                        <div className="d-flex justify-content-between">
                          <span className="text-dark d-none d-sm-inline">Visitar</span>
                          <Link to={project.web} target="_blank" className="btn btn-outline-primary btn-sm mr-1">
                            <span className="mr-2 mt-2" >Sitio web</span>
                            <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695936013/portfolio/rczxshnaxdvakbrbs6hd.png" className="icon" />
                          </Link>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="text-dark d-none d-sm-inline">Revisar</span>
                          <Link to={project.github} target="_blank" className="btn btn-outline-dark btn-sm">
                            <span className="mr-2">Repositorio</span>
                            <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695932058/portfolio/a3w1xhhdqdjm4shgb5gn.png" className="icon" />
                          </Link>
                        </div>
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
