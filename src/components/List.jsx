import { Link } from "react-router-dom";

export function List({ projects, show }) {
  const showing = show ? 'd-block' : 'd-none'
  return (
    <div className={`container-fluid ${showing}`}>
      <div className="row lead border rounded bg-primary text-white text-center text-sm py-1 px-2 no-gutters">
        <div className="col-3 col-sm-2">Framework</div>
        <div className="col-4 col-sm-6">Title</div>
        <div className="col-5 col-sm-4">Links</div>
      </div>
      {
        projects && projects.map(project => (
          <div className="row my-1 p-1 rounded bg-dark text-white no-gutters text-center" key={project.id}>
            <div className="col-3 col-sm-2 my-auto">
              <img src={project.frame} className="frame" />
            </div>
            <div className="col-4 col-sm-6 my-auto">{project.title}</div>
            <div className="col-5 col-sm-4 my-auto">
              <Link to={project.web} target="_blank" className="btn btn-sm mr-1 border rounded">
                <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695936013/portfolio/rczxshnaxdvakbrbs6hd.png" className="icon-button" />
              </Link>
              <Link to={project.github} target="_blank" className="btn btn-sm mr-1 border rounded">
                <img src="https://res.cloudinary.com/cloud-juan/image/upload/v1695932058/portfolio/a3w1xhhdqdjm4shgb5gn.png" className="icon-button" />
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}
