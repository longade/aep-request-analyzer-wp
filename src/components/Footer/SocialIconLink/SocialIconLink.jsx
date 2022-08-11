import "./SocialIconLink.scss";

const SocialIconLink = ({ ariaLabel, childIcon, to }) => {
    return (
        <a className='a-icon' href={to} target='_blank' aria-label={ariaLabel}>
            {childIcon}
        </a>
    );
}

export default SocialIconLink;