import React from "react"
import "../styles/home.css"
import "../styles/body.css"

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
          <h2>¿PLANEAS TU BODA? ¿ESTÁS BUSCANDO FLORES PARA TU EVENTO?</h2>
          <p>
            <b>Has llegado al lugar adecuado.</b>
          </p>
          <p>
            En The French Garden buscamos crear momentos únicos para ti y los
            tuyos. Gracias a nuestra amplia gama de flores, plantas y ramos,
            ofrecemos soluciones decorativas para todos los gustos y ocasiones.
          </p>
          <p>
            Enviamos a toda España en un plazo máximo de una semana gracias a
            nuestro equipo de delivery, y si necesitas que tu pedido llegue al
            extranjero, ¡ponte en contacto con nosotros!
          </p>
          <p>Estamos aquí para escucharte.</p>
          <img src={small} alt="Fotografía de ramo pequeño de tulipanes." />
        </div>
      </div>

      <br />

      <div className="column-section">
        <img src={landscape} alt="Imagen apaisada de ramos de flores secas." />
      </div>
    </div>
  )
}

export default HomeComponent
