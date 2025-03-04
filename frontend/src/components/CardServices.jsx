import React from 'react'

import scLogo from '../assets/img/logoSC.png'

import './CardServices.css'

const CardServices = ({img, title, description}) => {
  return (
    <div className='service-card outfit-normal'>
      <img src={img} alt={img} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default CardServices
