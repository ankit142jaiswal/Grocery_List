import { Button } from 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
const navigate = useNavigate()
const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
}

  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid" style={{fontWeight: 'bold'}}>
    <Link className="navbar-brand" to='/' style={{fontWeight: 'bold'}} >Groofers</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to='/'>Home</Link>
        </li>
      {(localStorage.getItem("authToken"))?
        <li className="nav-item">
          <Link className="nav-link active" to='/mylist'>My List</Link>
        </li> 
        :""
        }

      </ul>
      {(!localStorage.getItem("authToken"))?
      <div className="d-flex ">
        <Link className="btn btn-success mx-1" type="submit" to='/login' >Login</Link>
        <Link className="btn btn-success mx-1" type="submit" to='/signup' >Signup</Link>

      </div>
        :
          <button className="btn btn-danger mx-1" type="submit"  onClick={handleLogout} >Logout</button>

        }
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar