import "./SocialIconLink.scss";

const SocialIconLink = ({ ariaLabel, childIcon, to }) => {
    return (
        <a className='a-icon' href={to} target='_blank' rel="noopener noreferrer" aria-label={ariaLabel}>
            {childIcon}
        </a>
    );
}

export default SocialIconLink;