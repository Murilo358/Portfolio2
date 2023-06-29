import "./contactSection.scss";
import { useState } from "react";
import contactImg from "../../assets/Contact.svg";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import { ImSpinner8 } from "react-icons/im";
function contactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/murilobarbosa358@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";

      Swal.fire({
        icon: "success",
        color: "#d1d0cf",
        title: "Email enviado com sucesso",
        text: "Muito obrigado por entrar em contato",
        background: "#1d1d1d",
        showConfirmButton: false,
        timer: 2500,
      });
    } catch (error) {
      console.error("Erro:", error);
    }

    setLoading(false);
  };

  return (
    <div className="section  contact-section-container">
      <h1>ENTRE EM CONTATO</h1>

      <div className="contact-section-content">
        <img
          className="contact-section-content__image"
          src={contactImg}
          alt=""
        />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            className="emailForm"
            placeholder="Nome"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            className="emailForm"
            placeholder="E-mail"
            required
          />
          <input
            type="text"
            name="_subject"
            id="subject"
            className="emailForm"
            placeholder="Assunto"
            required
          />
          <textarea
            name="message"
            className="emailForm message"
            id="message"
            placeholder="Mensagem"
            required
          ></textarea>
          <button id="submitButton" type="submit" className="Button">
            <span
              className=""
              id="submitButtonLoading"
              role="status"
              aria-hidden="true"
            ></span>
            {loading ? <ImSpinner8 className="spin" /> : <span>ENVIAR</span>}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default contactSection;
