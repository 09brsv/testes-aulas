import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai';

import '../styles/components/informationContainer.sass';

const InformationContainer = () => {
  return (
    <section id="information-container">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(33)99902-4143</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>brunoornelio@hotmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Coronel Fabriciano - MG</p>
        </div>
      </div>
    </section>
  );
}

export default InformationContainer