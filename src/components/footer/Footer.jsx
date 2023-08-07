import React from 'react'
import rocket from "../../assets/img/Vector.png"

export default function Footer() {
  return (
    <footer>
      <img src={rocket} alt="rocket_image" />
      <p className='yellow-text--footer'>Exciting space adventure!</p>
    </footer>
  )
}