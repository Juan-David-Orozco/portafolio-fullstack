import { Link } from "react-router-dom";

export function Card({ projects, show }) {

  const showing = show ? 'd-none' : 'd-block'

  return (
    <>
      {
        projects.map((project) => (
          <div className={`col-12 col-sm-10 col-md-6 col-lg-4 p-2 mx-md-0 mx-auto ${showing}`} key={project.id}>
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
    </>
  )
}
