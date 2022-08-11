import useStyles from './styles';

export default function ProductsContainer({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.containerDiv}>
            {children}
        </div>
    );
}