import "./Footer.scss";
import SocialLogo from "./SocialLogo/SocialLogo";
import SocialIconLink from "./SocialIconLink/SocialIconLink";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='div-wrap'>
        <section className='section-media'>
          <div className='div-wrap-media'>
            <SocialLogo />
            <div className='div-icons'>
              <SocialIconLink ariaLabel={"Instagram"} childIcon={<FaInstagram />} to='https://www.instagram.com/davidelongo97' />
              <SocialIconLink ariaLabel={"Linkedin"} childIcon={<FaLinkedin />} to='https://it.linkedin.com/in/davide-longo-ab176a173' />
              <SocialIconLink ariaLabel={"GitHub"} childIcon={<FaGithub />} to='https://www.github.com/longade' />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;