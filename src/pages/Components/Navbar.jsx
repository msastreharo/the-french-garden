import React from "react"
import { Link } from "gatsby"
import "../styles/index.css"

const Navbar = () => {
  return (
    <div>
      <div className="navbarLinks">
        <Link to="/">INICIO</Link>
        <Link to="/bodas/">BODAS</Link>
        <Link to="/eventos/">EVENTOS</Link>
        <Link to="/contacto/">CONTACTO</Link>
        <Link to="/about/">CONÓCENOS</Link>
      </div>
    </div>
  )
}

export default Navbar
