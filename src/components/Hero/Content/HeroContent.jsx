import useStyles from './styles';

export default function HeroContent({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.contentDiv}>
            {children}
        </div>
    );
}