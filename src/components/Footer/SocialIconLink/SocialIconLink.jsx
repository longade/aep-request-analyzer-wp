import useStyles from './styles';

export default function SocialIconLink({ ariaLabel, childIcon, to }) {
    const classes = useStyles();

    return (
        <a className={classes.aIcon} href={to} target='_blank' aria-label={ariaLabel}>
            {childIcon}
        </a>
    );
}