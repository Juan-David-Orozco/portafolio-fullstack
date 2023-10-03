export function Table({projects}) {
  return (
    <>
      <div className="table-responsive">
        <div className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tilte</th>
              <th>Framework</th>
              <th>Website</th>
              <th>Repositorio</th>
            </tr>
          </thead>
          <tbody>
            {
              projects.map(project => (
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
        </div>
      </div>
    </>
  )
}
