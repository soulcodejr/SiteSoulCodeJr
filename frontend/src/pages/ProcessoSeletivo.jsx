import { useState, useEffect } from "react";
import SelectArea from "../sections/SelectArea";
import ProcessForm from "../components/ProcessForm";
import SubscriptionReview from "../components/SubscriptionReview";

import "./ProcessoSeletivo.css";

export default function ProcessoSeletivo() {

  //template para os dados que devem ser preenchidos
  const dataTemplate = {
    area: "",
    name: "",
    email: "",
    course: "",
    about: "",
  };

  //state com os dados que precisam persistir durante todo o formulário
  const [data, setData] = useState(dataTemplate);
  //state para identificar em qual passo do formulário o usuário está
  const [stepCounter, setStepCounter] = useState(0);

  //função que atualiza deteminado campo no state de dados do usuário
  //passada para os componentes via props
  const updateData = (key, value) => {
    const updatedData = { ...data, [key]: value };

    setData(updatedData);
  };

  //componentes com todos os passos do formulário, renderizados com base no state stepCounter
  const steps = [
    <SelectArea data={data} updateData={updateData} />,
    <ProcessForm data={data} updateData={updateData} />,
    <SubscriptionReview data={data} />,
  ];

  //função para validar se todos os dados do formulário foram preenchidos
  const allFilled = (data) => {
    return Object.values(data).every((value) => value != "");
  };

  //função que permite o usuário passar para próxima etapa do formulário e envia caso seja o último passo
  const nextStep = (e, currentStep) => {
    e.preventDefault();
    switch (currentStep) {
      case 0:
        data.area != ""
          ? setStepCounter(currentStep + 1)
          : setStepCounter(currentStep);
        break;
      case 1:
        allFilled(data) == true
          ? setStepCounter(currentStep + 1)
          : setStepCounter(currentStep);
        break;
      case 2:
        console.log("Formulário enviado!")
        break;
    }
  };

  return (
    <div className="process-container">
      {steps[stepCounter]}
      <button
        type="submit"
        className="primary-btn"
        onClick={(e) => nextStep(e, stepCounter)}
      >
        {stepCounter != 2 ? "Avançar" : "Enviar!"}
      </button>
      {stepCounter != 0 && (
        <button onClick={() => setStepCounter(stepCounter - 1)}>Voltar</button>
      )}
    </div>
  );
}
