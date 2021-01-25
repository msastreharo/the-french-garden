import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <div className="navbarLinks">
        <ul>
          <Link to="/">INICIO</Link>
          <Link to="/bodas/">BODAS</Link>
          <Link to="/eventos/">EVENTOS</Link>
          <Link to="/acerca-de/">ACERCA DE</Link>
          <Link to="/contacto/">CONTACTO</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
