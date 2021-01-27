import React from "react"
import "../styles/index.css"
import "../styles/body.css"

// Importing page components
import Header from "./Header.jsx"
import Navbar from "./Navbar.jsx"

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
    </div>
  )
}
