import React from 'react'

import './Form.css'

const HireForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit()} className='form-container'>
      <label>
        <p>Nome</p>
        <input type="text" placeholder='Ex: Soul Code'/>
      </label>
      <label>
        <p>Email</p>
        <input type="email" placeholder='Ex: soulcodejr@gmail.com'/>
      </label>
      <label>
        <p>Título do e-mail</p>
        <input type="text" placeholder='Ex: Dúvida sobre prazos'/>
      </label>
      <label>
        <p>Corpo do e-mail</p>
        <textarea placeholder='Ex: Olá, gostaria de saber...' className='outfit-normal'></textarea>
      </label>

      <button type="submit" id='form-button' className='primary-btn'>Enviar</button>
    </form>
  )
}

export default HireForm
