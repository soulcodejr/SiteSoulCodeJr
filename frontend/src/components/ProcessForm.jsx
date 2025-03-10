import React from "react";

import "./Form.css";
import "./ProcessForm.css";

const ProcessForm = ({data, updateData}) => {
  const handleChange = (key, value) => {
    updateData(key, value);
  };

  return (
    <div className="outer-process-form">
      <h1 className="outfit-bold">Prencha as informações da sua inscrição!</h1>
      <form className="form-container">
        <label>
          <p>Nome</p>
          <input
            type="text"
            placeholder="Ex: Soul Code"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
          />
        </label>
        <label>
          <p>Email</p>
          <input
            type="email"
            placeholder="Ex: soulcodejr@gmail.com"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />
        </label>
        <label>
          <p>Curso/Universidade</p>
          <input
            type="text"
            placeholder="Ciência da Computação-UENF"
            value={data.course}
            onChange={(e) => handleChange("course", e.target.value)}
            required
          />
        </label>
        <label>
          <p>Por que você deve fazer parte da equipe?</p>
          <textarea
            placeholder="Fale sobre as suas qualidades e interesses em participar da empresa Jr"
            className="outfit-normal"
            value={data.about}
            onChange={(e) => handleChange("about", e.target.value)}
            required
          ></textarea>
        </label>
      </form>
    </div>
  );
};

export default ProcessForm;
