import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { requestGetProjects } from "../services/requests";
import { db } from '../services/firebase'
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells, faList, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'

export function FrontPage() {

  const [search, setSearch] = useState("")

  const [projects, setProjects] = useState([])

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

  const filterProjects = async (busqueda) => {
    const q = query(collection(db, "frontend"), where("title", "==", busqueda))
    const querySnapshot = await getDocs(q)
    const docsFound = []
    querySnapshot.forEach(doc => {
      docsFound.push({id: doc.id, ...doc.data()})
      //console.log(doc.data())
    })
    return docsFound
  }

  const onfilterProjects = () => {
    console.log(search)
  }

  async function onChange (e) {
    const valueSearch = e.target.value
    //setSearch(valueSearch)
    console.log(e.target.value)
    //console.log(search)

    const inputValue = document.getElementById("input-search").value
    console.log(inputValue)
    setSearch(inputValue)

    if (search === "") console.log("search")

    // if(search === "") onGetProjects()
    // else {
    //   const foundProjects = await filterProjects(search)
    //   console.log(foundProjects)
    //   setProjects(foundProjects)
    //   // setSearch("")
    // }
  }

  const handleChange = async (e) => {

    // setSearch(e.target.value)
    console.log(e.target.name, e.target.value)
    const valueSearch = e.target.value
    setSearch(valueSearch)
    console.log(search)

    // if(e.target.value === "") onGetProjects()
    // else {
    //   const foundProjects = await filterProjects(e.target.value)
    //   console.log(foundProjects)
    //   setProjects(foundProjects)
    //   // setSearch("")
    // }

  }

  const handleClick = async (e) => {
    e.preventDefault()
    console.log(search)

    //setSearch("")

    // if(search === "") onGetProjects()
    // else {
    //   const foundProjects = await filterProjects()
    //   console.log(foundProjects)
    //   setProjects(foundProjects)
    //   setSearch("")
    // }
    // if(foundProjects.length === 0) onGetProjects()

    //filterProjects()

    // let projectsFound = projects.filter((project) => project.title == search)
    // console.log(projectsFound)
    // setProjects(projectsFound)
  }

  useEffect(() => {
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

          <div className="col-12 mx-auto bg-light pt-4 pb-3 px-4 px-md-4">
            <div className="row align-items-center no-gutters px-0 px-md-4 py-2 justify-content-between ">
              <div className="col-9 col-sm-8 col-md-10 border border-dark rounded" id="col-search">
                <form className="form">
                  <div className="form-row">
                    <div className="col-12 mx-auto"> 
                      <div className="input-group">
                        <input
                          type="text" placeholder="Buscar proyecto"
                          className='form-control' name="search"
                          value={search} onChange={onChange}
                          id="input-search"
                        />
                        <div className="input-group-prepend busqueda">
                          <button className="btn btn-secondary" type="button" onClick={handleClick}>
                            <FontAwesomeIcon icon={faXmark } />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div className="col-1">
                <div className="row justify-content-center text-center no-gutters">
                  <div className="col border border-dark rounded py-1 m-1">
                    <FontAwesomeIcon icon={faTableCells} />
                  </div>
                  <div className="col border border-dark rounded py-1 m-1 ">
                    <FontAwesomeIcon icon={faList} />
                  </div>
                </div>
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
              </div> */}
              <div className="col-3 col-md-2 py-1 px-auto mx-auto">

                <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                  <div className="btn-group" role="group" aria-label="First group">
                    <button type="button" className="btn btn-dark">
                      <FontAwesomeIcon icon={faTableCells} />
                    </button>
                    <button type="button" className="btn btn-primary">
                      <span className="d-none d-lg-inline text-sm" >Agregar</span>
                      <FontAwesomeIcon icon={faPlus} className="my-auto"/>
                    </button>
                  </div>
                </div>

                {/* <Link className="btn btn-dark border border-dark rounded text-white p-2 mx-auto" href="#">
                  <span className="d-none d-lg-inline text-sm" >Agregar</span>
                  <FontAwesomeIcon icon={faPlus} className="my-auto"/>
                </Link> */}

              </div>
            </div>
          </div>

          <div className="col-12 mx-auto bg-light py-3 px-3 px-md-5">
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
