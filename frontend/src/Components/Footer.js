import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div >       
        <footer className="bg-secondary mt-3 p-1 fixed-bottom">        
            <div className="">
            <Link to="/" className='nav-link' >
            <span className="text-muted">© 2024 Groofers, Inc</span>
            </Link>
            <hr />
            </div>
        </footer>
    </div>
  )
}

export default Footer