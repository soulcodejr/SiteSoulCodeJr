import React from 'react'

import './SubscriptionReview.css'

const SubscriptionReview = ({data}) => {
  return (
    <div className='review-container'>
      <h1 className='outfit-bold'>Agrademos por querer fazer parte da nossa equipe!</h1>
      <h2 className='subtitle outfit-normal'>Confira suas informações antes de enviar sua inscrição:</h2>
      <div className="infos-container">
        <ul className='personal-data outfit-normal'>
          <li> <span>Nome:</span> { data.name}</li>
          <li> <span>E-mail:</span> {data.email}</li>
          <li> <span>Universidade/Curso:</span> {data.course}</li>
          <li> <span>Área de atuação:</span> {data.area}</li>
        </ul>
        <div className="about-box outfit-normal">
          <p className="about-text">
            <span>Sobre você: </span>
            { data.about}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionReview
