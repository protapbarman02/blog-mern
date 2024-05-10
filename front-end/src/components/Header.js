import React from 'react'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark position-fixed px-2" data-bs-theme="dark" style={{top:0,width:100+'vw',height:50+'px'}}>
        <div className="container-fluid">
          <a href="/" className="navbar-brand">Blog-MERN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control-sm me-2 bg-light text-dark rounded-0 border-0" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-sm btn-outline-light rounded-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header