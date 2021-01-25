import React from "react"
import "../styles/index.css"
import { Link } from "gatsby"

// Importing images
import logo from "../../../public/static/logo.png"

function Header() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" className="headerImg" />
      </Link>
    </div>
  )
}

export default Header
