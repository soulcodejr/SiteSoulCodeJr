import React from "react";
import api from "../axios/config";
import { ToastContainer, toast } from "react-toastify";
import { useState, useRef } from "react";

import "./Form.css";

const HireForm = () => {
  const [isSending, setIsSending] = useState(false);
    const emailRef = useRef(null);
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const updateField = (key, value) => {
    const newData = { ...emailData, [key]: value };

    setEmailData(newData);
  };

  const sendEmail = async () => {
    setIsSending(true);
    if (emailRef.current == emailData.email) {
      toast.info(
        "Acabamos de ser notificados sobre uma mensagem deste emissor, verifique sua caixa de mensagens!",
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
    try {
      const res = await api.post("/email/external", {
        owner: emailData.name,
        fromWho: emailData.email,
        toWho: "juanhygino@gmail.com",
        tittle: emailData.title,
        message: emailData.message,
      });

      if (!res) {
        throw new Error();
      }

      emailRef.current = emailData.email

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
      toast.error("Falha na submissão!", {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    sendEmail();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form-container">
      <ToastContainer />
      <label>
        <p>Nome</p>
        <input
          type="text"
          placeholder="Ex: Soul Code"
          required
          onChange={(e) => updateField("name", e.target.value)}
        />
      </label>
      <label>
        <p>Email</p>
        <input
          type="email"
          placeholder="Ex: soulcodejr@gmail.com"
          required
          onChange={(e) => updateField("email", e.target.value)}
        />
      </label>
      <label>
        <p>Título do e-mail</p>
        <input
          type="text"
          placeholder="Ex: Dúvida sobre prazos"
          required
          onChange={(e) => updateField("title", e.target.value)}
        />
      </label>
      <label>
        <p>Corpo do e-mail</p>
        <textarea
          placeholder="Ex: Olá, gostaria de saber..."
          className="outfit-normal"
          required
          onChange={(e) => updateField("message", e.target.value)}
        ></textarea>
      </label>

      <button
        type="submit"
        id="form-button"
        className={`primary-btn ${isSending ? "sending" : ""}`}
        disabled={isSending}
      >
        Enviar
      </button>
    </form>
  );
};

export default HireForm;
