export function HomePage() {
  return (
    <>
      <main>
        <h1 id="title-portafolio" className='text-dark text-center pt-4'>Portafolio Desarrollador FullStack</h1>
        <div id="carouselMain" class="carousel slide mt-3" data-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="row mx-auto no gutters align-items-center justify-content-center">
                <div className="rejilla border col-sm-12 col-md-6 mx-auto p-5">
                  <div className="card h-100">
                    <div className="card-header d-flex justify-content-between">
                      <h3>FrontEnd</h3>
                      <img id="front-icon" className="d-block" src="https://res.cloudinary.com/cloud-juan/image/upload/v1695846285/portfolio/nojjfgo89hfsxfykhpia.png" alt="Second slide" />
                    </div>
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="rejilla border col-sm-12 col-md-6 mx-auto px-0">
                  <div class="card">
                    <img class="card-img-top px-5 py-3" src="https://res.cloudinary.com/cloud-juan/image/upload/v1695845940/portfolio/f8raheskzsowmgfkfmof.png" alt="Card image cap" />
                    <div class="card-body">
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                  {/* <div className="row mx-auto no gutters">
                    <div className="col-12">
                    </div>
                    <div className="col-12">
                      <img className="d-block w-100" src="https://res.cloudinary.com/cloud-juan/image/upload/v1695844981/portfolio/zig1dgzffyj8lnre6sfm.png" alt="Second slide" />
                    </div>
                  </div> */}
                  
                </div>
              </div>
            </div>

            {/* <div className="carousel-item">
              <div className="row mx-auto no gutters align-items-center justify-content-center">
                <div className="rejilla border col-sm-12 col-md-6 mx-auto">
                  3
                </div>
                <div className="rejilla border col-sm-12 col-md-6 mx-auto">
                  <img className="d-block w-100" src="https://res.cloudinary.com/cloud-juan/image/upload/v1691556020/posts/nx8a1ikcftjkppn8xscg.jpg" alt="Second slide" />
                </div>
              </div>
            </div> */}

            {/* <div className="carousel-item">
              <img className="d-block w-100" src="https://res.cloudinary.com/cloud-juan/image/upload/v1691555661/posts/rknrpeohpethgxjez59i.jpg" alt="Third slide" />
            </div> */}

          </div>
          <a class="carousel-control-prev" href="#carouselMain" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselMain" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </main>
    </>
  )
}
