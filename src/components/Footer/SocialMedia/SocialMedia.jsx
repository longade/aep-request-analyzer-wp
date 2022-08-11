import useStyles from './styles';

export default function SocialMedia({ children }) {
    const classes = useStyles();

    return (
        <section className={classes.sectionMedia}>
            {children}
        </section>
    );
}