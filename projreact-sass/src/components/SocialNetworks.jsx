import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import "../styles/components/socialNetworks.sass";

const socialNetworks = [
    {name: 'linkedin', icon: <FaLinkedinIn />},
    {name: 'github', icon: <FaGithub />},
    {name: 'instagram', icon: <FaInstagram />}
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map(socialNetwork =>(
            <a 
            href="" 
            className="social-btn"
            id={socialNetwork.name} key={socialNetwork.icon}
            >{socialNetwork.icon}</a>
        ))}
    </section>
  )
};

export default SocialNetworks;
