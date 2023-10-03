import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { requestGetProjects } from "../services/requests";
import { db } from '../services/firebase'
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faTableCells, faList, faPlus, faXmark, faSearch, faSquareXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { Table } from '../components/Table'
import { Card } from '../components/Card'

export function FrontPage() {

  const [search, setSearch] = useState("")

  const [projects, setProjects] = useState([])

  const [projectsView, setProjectsView] = useState([])

  const [iconChangeView, setIconChangeWiew] = useState("fa-list")

  const [changeView, setChangeView] = useState(true)

  const onGetProjects = () => {
    onSnapshot(collection(db, "frontend"), (querySnapshot) => {
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({id: doc.id, ...doc.data()})
      })
      console.log(docs)
      setProjects(docs)
      setProjectsView(docs)
    });
  }

  // const filterProjects = async () => {
  //   const querySearch = query(collection(db, "frontend"),
  //     where("title", "==", search))
  //   const querySnapshot = await getDocs(querySearch)
  //   const docsFound = []
  //   querySnapshot.forEach(doc => {
  //     docsFound.push({id: doc.id, ...doc.data()})
  //   })
  //   console.log(docsFound)
  //   return docsFound
  // }

  const handleChange = (e) => {
    setSearch(e.target.value)
    onFilterProjects(e.target.value)
    // if(e.target.value == !"") onFilterProjects(e.target.value)
    // else onGetProjects()
  }

  const onFilterProjects = (currentSearch) => {
    var projectsFilter = projectsView.filter((project) => {
      if(project.title !== "" && project.framework !== "") {
        if(project.title.toString().toLowerCase().includes(currentSearch.toLowerCase())
        || project.framework.toString().toLowerCase().includes(currentSearch.toLowerCase())
        ){
          return project;
        }
      }
    });
    //console.log(projectsFilter)
    setProjects(projectsFilter)
  }

  const toggleView = (e) => {
    e.preventDefault()
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.childNodes)
    // console.log(e.target.parentNode)
    //e.stopPropagation()
    if(e.target.id === "view-table"){
      setIconChangeWiew("fa-list")
      document.getElementById("view-table").setAttribute("id", "view-card")
      setChangeView(false)
    } else if(e.target.id === "view-card") {
      setIconChangeWiew("fa-table-cells")
      document.getElementById("view-card").setAttribute("id", "view-table")
      setChangeView(true)
    }

  }

  // const handleClick = async (e) => {
  //   e.preventDefault()
  //   console.log(search)
  //   //const expReg = /search/
  //   const expReg = new RegExp(search)
  //   console.log(expReg)
  //   if(search === "") onGetProjects()
  //   else {
  //     // const titleProjects = projects.map((project) => project.title)
  //     projects.forEach((project, index) => {
  //       const validate = project.title.match(expReg)
  //       console.log(validate)
  //     })
  //     // console.log(titleProjects)
  //     const foundProjects = await filterProjects(expReg)
  //     console.log(foundProjects)
  //     //setProjects(foundProjects)
  //     // setSearch("")
  //   }
  // }

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
        <div className="row align-items-center no-gutters mx-auto">
          {/* Search Input - Toogle Button - Added Project */}
          <div className="col-12 mx-auto bg-light pt-4 pb-3 px-4 px-md-4">
            <div className="row align-items-center no-gutters px-0 px-md-4 py-2 justify-content-between">

              <div className="col-10 col-xl-11">
                <div className="input-group">
                  <input
                    type="text" placeholder="Buscar proyecto"
                    className='form-control' name="search"
                    value={search} onChange={handleChange}
                    id="input-search"
                  />
                  {/* {search && <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" onClick={cancelSearch}  >
                      <FontAwesomeIcon icon="fa-solid fa-xmark" />
                    </button>
                  </div>} */}
                </div>
              </div>

              <div className="col-2 col-xl-1">
                <div className="d-none d-sm-block p-1 text-right">
                  <button 
                    id="view-table" type="button" 
                    className="btn btn-dark" data-toggle="button" 
                    aria-pressed="false" autoComplete="off"
                    onClick={toggleView}
                  >
                    <FontAwesomeIcon icon={`fa-solid ${iconChangeView}`} onClick={toggleView}/>
                  </button>
                </div>
                {/* <div className="d-none d-sm-block p-1 text-right" data-toggle="buttons">
                  <div className="btn-group justify-content-end" role="group" aria-label="First group">
                    <button type="button" className="btn btn-dark" onClick={tooggleView} >
                      <FontAwesomeIcon icon="fa-solid fa-table-cells" />
                    </button>
                    <button type="button" className="btn btn-secondary">
                      <FontAwesomeIcon icon="fa-solid fa-list" className="my-auto" />
                    </button>
                  </div>
                </div> */}
                <div className="dropdown text-right d-block d-sm-none ml-1">
                  <div className="btn-group dropleft">
                    <button className="btn btn-dark rounded" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {/* <FontAwesomeIcon icon="fa-solid fa-list" /> */}
                      <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                    </button>
                    <div className="dropdown-menu text-center" aria-labelledby="dropdownMenuButton">
                      <button type="button" className="btn btn-dark mr-1 dropdown-item">
                        <div className="d-flex justify-content-between">
                          <FontAwesomeIcon icon="fa-solid fa-table-cells" className="my-auto" /> <span>Vista </span>
                        </div>
                      </button>
                      <button type="button" className="btn btn-primary dropdown-item">
                        <div className="d-flex justify-content-between text-left">
                          <FontAwesomeIcon icon="fa-solid fa-plus" className="my-auto" /><span>Agregar</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div> 
 
            </div>
          </div>
          {/* Projects List => Differente views */}
          <div className="col-12 mx-auto bg-light py-3 px-3 px-md-5">
            <div className="row mx-auto align-items-start justify-content-start no-gutters">
              <Table projects={projects} show={changeView} />
              <Card projects={projects} show={changeView}/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
