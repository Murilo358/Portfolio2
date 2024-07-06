import { Translator } from "../I18n";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer-container">
      <h3>
        <Translator path="footer.developedBy" />
      </h3>
    </div>
  );
}

export default Footer;
