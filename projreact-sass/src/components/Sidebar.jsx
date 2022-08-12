import Avatar from '../img/me-black.jpeg';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="eu" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />   
         <InformationContainer />
        <a href="" className="btn">Download currículo</a>
    </aside>
    
  )
}

export default Sidebar