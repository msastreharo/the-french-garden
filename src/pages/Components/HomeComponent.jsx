import React from "react"
import "../styles/home.css"

// Importing images
import landscape from "../../../public/static/bouquet-1.jpg"
import portrait from "../../../public/static/bouquet-2.jpg"
import small from "../../../public/static/bouquet-3.jpg"

function HomeComponent() {
  return (
    <div>
      <div className="grid-section">
        <div className="grid-left">
          <img src={portrait} alt="Fotografía de ramos en maceta" />
        </div>

        <div className="grid-right">
          <h2>Blablablabla</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <img src={small} alt="Fotografía de ramo pequeño de tulipanes." />
        </div>
      </div>

      <div className="column-section">
        <img src={landscape} alt="Imagen apaisada de ramos de flores secas." />
      </div>
    </div>
  )
}

export default HomeComponent
