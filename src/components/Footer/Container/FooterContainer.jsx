import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';
import SocialIconLink from '../SocialIconLink/SocialIconLink';
import SocialIcons from '../SocialIcons/SocialIcons';
import SocialLogo from '../SocialLogo/SocialLogo';
import SocialMedia from '../SocialMedia/SocialMedia';
import SocialMediaWrap from '../SocialMediaWrap/SocialMediaWrap';
import FooterWrap from '../Wrap/FooterWrap';
import useStyles from './styles';

export default function FooterContainer() {

    const classes = useStyles();

    return (
        <footer className={classes.footerContainer}>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo />
                        <SocialIcons>
                            {/* <SocialIconLink ariaLabel={"Facebook"} childIcon={<FaFacebook />} /> */}
                            <SocialIconLink ariaLabel={"Instagram"} childIcon={<FaInstagram />} to='https://www.instagram.com/davidelongo97' />
                            {/* <SocialIconLink ariaLabel={"Youtube"} childIcon={<FaYoutube />} />
                            <SocialIconLink ariaLabel={"Twitter"} childIcon={<FaTwitter />} /> */}
                            <SocialIconLink ariaLabel={"Linkedin"} childIcon={<FaLinkedin />} to='https://it.linkedin.com/in/davide-longo-ab176a173' />
                            <SocialIconLink ariaLabel={"GitHub"} childIcon={<FaGithub />} to='https://www.github.com/longade' />
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </footer>
    );

}