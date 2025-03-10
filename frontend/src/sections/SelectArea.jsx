import React, { useEffect } from "react";
import ProcessCard from "../components/ProcessCard";
import { MdOutlineInsertLink } from "react-icons/md";

import "./SelectArea.css";

const SelectArea = ({ data, updateData }) => {

  const handleSelectArea = (value) => {
    updateData("area", value)
  }


  return (
    <div className="outer-areas-container">
      <h1 className="outfit-bold">Selecione a sua área de atuação</h1>
      <div className="areas-container">
        <ProcessCard
          icon={<MdOutlineInsertLink />}
          area={"Frontend"}
          description={"O time que tem o trabalho de desenvolver as telas mais bonitas para as aplicações! Colocando em prática experiência do usuário, interfaces dinâmicas e consumo de APIs..."}
          onChange={(e) => handleSelectArea(e.target.value)}
          data={data}
        />
        <ProcessCard
          icon={<MdOutlineInsertLink />}
          area={"Backend"}
          description={"O time responsável por tornar nossas aplicações robustas, tratando, providenciando e armazenando as informações sensíveis dos projetos..."}
          onChange={(e) => handleSelectArea(e.target.value)}
          data={data}
        />
        <ProcessCard
          icon={<MdOutlineInsertLink />}
          area={"Data science"}
          description={"A equipe responsável pelos nossos insights e previsões, dessa maneira tendo previsões de quão longêvos serão os projetos..."}
          onChange={(e) => handleSelectArea(e.target.value)}
          data={data}
        />
        <ProcessCard
          icon={<MdOutlineInsertLink />}
          area={"Design"}
          description={"Os principais responsáveis pela beleza e criatividade de todos os projetos! A equipe de design é a responsável pelo processo criativo de nossas aplicações..."}
          onChange={(e) => handleSelectArea(e.target.value)}
          data={data}
        />
      </div>
    </div>
  );
};

export default SelectArea;
