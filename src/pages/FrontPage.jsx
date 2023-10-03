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

  const [iconChangeView, setIconChangeWiew] = useState("fa-table-cells")

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

  const filterProjects = async () => {
    const querySearch = query(collection(db, "frontend"),
      where("title", "==", search))
    const querySnapshot = await getDocs(querySearch)
    const docsFound = []
    querySnapshot.forEach(doc => {
      docsFound.push({id: doc.id, ...doc.data()})
    })
    console.log(docsFound)
    return docsFound
  }

  async function handleChange (e) {
    const valueSearch = e.target.value
    setSearch(valueSearch)
    if(valueSearch == "") onGetProjects()
  }

  const cancelSearch = (e) => {
    e.preventDefault()
    setSearch("")
  }

  const tooggleView = (e) => {
    e.preventDefault()
    console.log(e.target)
    //e.stopPropagation()
    setIconChangeWiew("fa-list")
  }

  const handleClick = async (e) => {
    e.preventDefault()
    console.log(search)
    //const expReg = /search/
    const expReg = new RegExp(search)
    console.log(expReg)
    if(search === "") onGetProjects()
    else {
      // const titleProjects = projects.map((project) => project.title)
      projects.forEach((project, index) => {
        const validate = project.title.match(expReg)
        console.log(validate)
      })
      // console.log(titleProjects)
      const foundProjects = await filterProjects(expReg)
      console.log(foundProjects)
      //setProjects(foundProjects)
      // setSearch("")
    }
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
        <div className="row align-items-center no-gutters mx-auto">
          {/* Search Input - Toogle Button - Added Project */}
          <div className="col-12 mx-auto bg-light pt-4 pb-3 px-4 px-md-4">
            <div className="row align-items-center no-gutters px-0 px-md-4 py-2 justify-content-between">
              <div className="col-10">
                <div className="input-group">
                  <input
                    type="text" placeholder="Buscar proyecto"
                    className='form-control' name="search"
                    value={search} onChange={handleChange}
                    id="input-search"
                  />
                  <div className="input-group-append">                    
                    <button className="btn btn-secondary" type="button" onClick={handleClick}>
                      {/* <FontAwesomeIcon icon={faSearch } /> */}
                      <FontAwesomeIcon icon="fa-solid fa-search" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="d-none d-sm-block p-1 text-right" data-toggle="buttons">
                  <div className="btn-group justify-content-end" role="group" aria-label="First group">
                    <button type="button" className="btn btn-dark" onClick={tooggleView} >
                      <FontAwesomeIcon icon={`fa-solid fa-table-cells`} />
                    </button>
                    <button type="button" className="btn btn-primary">
                      <span className="d-none d-lg-inline text-sm" >Agregar</span>
                      <FontAwesomeIcon icon="fa-solid fa-plus" className="my-auto" />
                    </button>
                  </div>
                </div>
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
              {/* <Table projects={projects} /> */}
              <Card projects={projects} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
