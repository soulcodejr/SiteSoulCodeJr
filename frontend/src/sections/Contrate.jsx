import React from "react";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";

import Form from "../components/Form";

import "./Contrate.css";

const Contrate = () => {
  return (
    <div className="outer">
      <button className="section-button">Contatos</button>
      <div className="contrate-container outfit-normal">
      <div className="text-container">
        <h2>Tem interesse em nos contratar?</h2>
        <p>
          Caso tenha alguma dúvida relacionada aos nossos serviços, projetos ou
          preços, entre em contato conosco.
        </p>

        <div className="infos-container">
          <span>
            {" "}
            <MdOutlineEmail /> Soulcodejr@gmail.com
          </span>
          <span>
            {" "}
            <MdOutlinePhone /> (22) xxxxx-xxxx
          </span>
          <span>
            {" "}
            <MdOutlineLocationOn /> Av. Alberto Lamego, 2000 - Parque
            Califórnia, Campos dos Goytacazes - RJ
          </span>
        </div>
      </div>
      <Form handleSubmit={() => console.log()} />
    </div>
    </div>

  );
};

export default Contrate;
