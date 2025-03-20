import React from "react";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";

import HireForm from "../components/HireForm";

import "./Contrate.css";
import HeaderSection from "../components/HeaderSection";

const Contrate = () => {
  return (
    <div className="outer">
      <HeaderSection 
        button_title={"Contatos"}
      />
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
      <HireForm handleSubmit={() => console.log()} />
    </div>
    </div>

  );
};

export default Contrate;
