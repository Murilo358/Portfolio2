import "./contactSection.scss";
import contactImg from "../../assets/Contact.svg";
import Footer from "../Footer/Footer";
function contactSection() {
  return (
    <div className="section  contact-section-container">
      <h1>ENTRE EM CONTATO</h1>

      <div className="contact-section-content">
        <img
          className="contact-section-content__image"
          src={contactImg}
          alt=""
        />

        <form
          className=""
          action="https://formsubmit.co/murilobarbosa358@gmail.com"
          method="POST"
        >
          {/* <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="json" /> */}
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
            <span>ENVIAR</span>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default contactSection;
