import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"; // Importa tu archivo CSS donde definirás los estilos necesarios

const Footer = () => {
  return (
    <div className="coffee-icon-container">
      <button className="coffee-button">
        <FontAwesomeIcon icon={faMugHot} />
        <span>Reservar</span>
      </button>
      <button className="coffee-button">
        <FontAwesomeIcon icon={faMugHot} />
        <span>Mis turnos</span>
      </button>
    </div>
  );
};

export default Footer;
