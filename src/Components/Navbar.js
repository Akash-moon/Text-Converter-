import React from 'react'
import PropTypes from 'prop-types'

// Props is title and it is a Javascript
export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

        {/* props */}
        {/* link or too use krne se page reload nhi hoga  */}
          <a className="navbar-brand" href="#">{props.title}</a>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link active" aria-current = "page" href="#">Home </a>
              </li>
              
            </ul>

            
            {/* Yeh search button the bekar tha */}
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toogle} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  abouttext : PropTypes.string
}

Navbar.defaultProps = {
  title : "Set Title Here",
  abouttext : "About Text"
}