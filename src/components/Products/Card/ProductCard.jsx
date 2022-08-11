import useStyles from './styles';

export default function ProductCard({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            {children}
        </div>
    );
}