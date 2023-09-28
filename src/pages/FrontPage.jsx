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
        <div className="row mx-auto align-items-center justify-content-center no-gutters">
          <div className="col-11 col-sm-10 col-md-9 mx-auto text-center my-3">
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
        <div className="row mx-auto align-items-center justify-content-center no-gutters">
          {
            projects.map((project) => (
              <div className="col-11 col-sm-8 col-md-6 col-lg-4 p-2 mx-auto" key={project.id}>
                <div className="card">
                  <div className="card-header bg-dark text-white d-flex justify-content-between">
                    <h5 className="mb-0" >{project.title}</h5>
                    <img src={project.frame} className="icon" />
                  </div>
                  <div className="card-body">
                    <p>{project.content}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-around">
                    <Link to={project.web} target="_blank" className="btn btn-primary">
                      <span className="mr-2 d-none d-sm-inline" >Sitio web</span>
                      <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695932411/portfolio/vm72n7diesv66v625sid.png" className="icon" />
                    </Link>
                    <Link to={project.github} target="_blank" className="btn btn-dark">
                    <span className="mr-2 d-none d-sm-inline" >Repositorio</span>
                      <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695932058/portfolio/a3w1xhhdqdjm4shgb5gn.png" className="icon" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }

          {/* <div className="col-md-4 p-2">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5>webservice-dragdrop-react</h5>
                <Link to={"https://webservice-dragdrop-react.vercel.app/"} className="btn btn-sm" target="_blank">
                  Visitar
                </Link>
              </div>
            </div>
          </div> */}

        </div>
      </main>
    </>
  )
}
