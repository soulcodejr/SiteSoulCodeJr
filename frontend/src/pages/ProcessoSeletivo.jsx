import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import api from "../axios/config";

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

  const emailRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

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

  const saveCandidate = async () => {
    if (emailRef.current == data.email) {
      toast.info(
        "Esse e-mail acabou de ser cadastrado! Confira sua caixa de mensagens antes de tentar novamente.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      setIsSending(true)

      setTimeout(() => {
        setIsSending(false)
      }, 5000)

      return;
    }

    setIsSending(true);
    try {
      const response = await api.post("/candidates/insert", {
        name: data.name,
        email: data.email,
        registration: data.course,
        sector: data.area,
      });

      if (!response) {
        throw new Error();
      }

      emailRef.current = data.email;

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
    } catch (error) {
      toast.error("Erro na submissão do formulário", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setIsSending(false);
    }
  };

  //função que permite o usuário passar para próxima etapa do formulário e envia caso seja o último passo
  const nextStep = (e, currentStep) => {
    e.preventDefault();
    switch (currentStep) {
      case 0:
        data.area != ""
          ? setStepCounter(currentStep + 1)
          : toast.error("É necessário escolher uma área para prosseguir!", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
        break;
      case 1:
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (allFilled(data) == false) {
          toast.error(
            "Você precisa preencher todos os campos antes de avançar",
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
          return;
        }
        if (
          !emailRegex.test(document.getElementById("email-input-process").value)
        ) {
          toast.error("Coloque um e-mail válido", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          return;
        }

        setStepCounter(stepCounter + 1);

        break;
      case 2:
        const response = saveCandidate();

        break;
    }
  };

  return (
    <div className="process-container">
      {steps[stepCounter]}
      <button
        type="submit"
        className={`primary-btn ${isSending ? "sending" : ""}`}
        disabled={isSending}
        onClick={(e) => nextStep(e, stepCounter)}
      >
        {stepCounter != 2 ? "Avançar" : "Enviar!"}
      </button>
      {stepCounter != 0 && (
        <button onClick={() => setStepCounter(stepCounter - 1)}>Voltar</button>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
