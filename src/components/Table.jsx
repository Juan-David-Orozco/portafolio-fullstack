export function Table({ projects, show }) {

  const showing = show ? 'd-block' : 'd-none'

  return (
    <div className={`Table-Container ${showing}`}>
      <div className="table-responsive">
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tilte</th>
              <th scope="col">Framework</th>
              <th scope="col">Website</th>
              <th scope="col">Repositorio</th>
            </tr>
          </thead>
          <tbody>
            {
              projects && projects.map(project => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.title}</td>
                  <td>{project.framework}</td>
                  <td>{project.web}</td>
                  <td>{project.github}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
