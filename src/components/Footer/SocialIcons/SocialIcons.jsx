import useStyles from './styles';

export default function SocialIcons({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.divIcons}>
            {children}
        </div>
    );
}