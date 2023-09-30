import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { requestGetProjects } from "../services/requests";
import { db } from '../services/firebase'
import { collection, onSnapshot, } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells, faList } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function FrontPage() {

  const [search, setSearch] = useState("")

  const [projects, setProjects] = useState([])

  const getProjects = async () => {
    const result = await requestGetProjects()
    console.log(result)
    const docs = []
    result.forEach((doc) => {
      docs.push({id: doc.id, ...doc.data()})
    });
    setProjects(docs)
    console.log(docs)
  }

  // const getAllProjects = () => {
  //   const response = onGetProjects()
  //   console.log(response)
  // }

  const onGetProjects = () => {
    onSnapshot(collection(db, "frontend"), (querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({id: doc.id, ...doc.data()})
      })
      console.log(docs)
      setProjects(docs)
    });
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
    console.log(search)
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log(search)
  }

  useEffect(() => {
    //getProjects();
    //getAllProjects()
    onGetProjects()
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
        {/* <div className="row align-items-center justify-content-center no-gutters mx-auto">
          <div className="col-12 mx-auto d-flex justify-content-between">

          </div>
        </div> */}
        <div className="row mx-auto align-items-center no-gutters">

          <div className="col-12 mx-auto bg-light pt-4 pb-3 px-3 px-md-2">
            <div className="row  align-items-center no-gutters px-0 px-md-4 py-2 justify-content-between flex-nowrap">
              <div className="col-8 col-sm-8 col-md-9 border border-dark rounded" id="col-search">
                <form className="form">
                  <div className="form-row">
                    <div className="col-12 mx-auto"> 
                      <input
                        type="text" placeholder="Buscar proyecto"
                        className='form-control' name="name"
                        value={search} onChange={handleChange}
                        id="input-search"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col ">
                {/* <div className="row justify-content-center text-center no-gutters">
                  <div className="col border border-dark rounded py-1 m-1">
                    <FontAwesomeIcon icon={faTableCells} />
                  </div>
                  <div className="col border border-dark rounded py-1 m-1 ">
                    <FontAwesomeIcon icon={faList} />
                  </div>
                </div> */}
                <ul className="nav justify-content-center flex-nowrap">
                  <li className="nav-item px-1 py-1">
                    <Link className="nav-link active border border-dark rounded text-dark" href="#">
                      <FontAwesomeIcon icon={faTableCells} />
                    </Link>
                  </li>
                  <li className="nav-item py-1">
                    <Link className="nav-link border border-dark rounded text-dark" href="#">
                      <FontAwesomeIcon icon={faList} />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-1 col-md-2 ml-1 py-1">
                <Link className="btn btn-dark border border-dark rounded text-white p-2 mx-auto" href="#">
                  <span className="d-none d-lg-inline text-sm" >Agregar</span>
                  <FontAwesomeIcon icon={faPlus} className="my-auto"/>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 mx-auto bg-light py-3 px-2 px-md-4">
            <div className="row mx-auto align-items-start justify-content-start no-gutters">
              {
                projects.map((project) => (
                  <div className="col-12 col-sm-10 col-md-6 col-lg-4 p-2 mx-md-0 mx-auto" key={project.id}>
                    <div className="card border border-dark">
                      <div className="card-header bg-secondary d-flex justify-content-between">
                        <h6 className="my-auto" >{project.title}</h6>
                        <img src={project.frame} className="frame" />
                      </div>
                      <div className="card-body">
                        <p className="pb-4" >{project.content}</p>
                        <p>
                          <Link to={project.web} target="_blank" className="btn btn-outline-primary btn-sm mr-1">
                            <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695936013/portfolio/rczxshnaxdvakbrbs6hd.png" className="icon-button" />
                          </Link>
                          <span>Sitio Web</span>
                        </p>
                        <p>
                          <Link to={project.github} target="_blank" className="btn btn-outline-dark btn-sm mr-1">
                            <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695932058/portfolio/a3w1xhhdqdjm4shgb5gn.png" className="icon-button" />
                          </Link>
                          <span>Repositorio</span>
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
