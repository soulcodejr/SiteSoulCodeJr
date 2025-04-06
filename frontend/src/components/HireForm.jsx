import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "./Form.css";

const HireForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Formulário enviado!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form-container">
      <ToastContainer />
      <label>
        <p>Nome</p>
        <input type="text" placeholder="Ex: Soul Code" required />
      </label>
      <label>
        <p>Email</p>
        <input type="email" placeholder="Ex: soulcodejr@gmail.com" required />
      </label>
      <label>
        <p>Título do e-mail</p>
        <input type="text" placeholder="Ex: Dúvida sobre prazos" required />
      </label>
      <label>
        <p>Corpo do e-mail</p>
        <textarea
          placeholder="Ex: Olá, gostaria de saber..."
          className="outfit-normal"
          required
        ></textarea>
      </label>

      <button type="submit" id="form-button" className="primary-btn">
        Enviar
      </button>
    </form>
  );
};

export default HireForm;
