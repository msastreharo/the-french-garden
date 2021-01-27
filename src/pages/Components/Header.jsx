import React from "react"
import "../styles/index.css"
import { Link } from "gatsby"
import "../styles/body.css"

// Importing images
import logo from "../../../public/static/logo.png"

function Header() {
  return (
    <div>
      <div className="headerWrapper">
        <Link to="/">
          <img src={logo} alt="logo" className="headerImg" />
        </Link>
      </div>
    </div>
  )
}

export default Header
