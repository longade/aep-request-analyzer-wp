import useStyles from './styles';

export default function ProductsHeading({ heading }) {
    const classes = useStyles();

    return (
        <h1 className={classes.h1}>{heading}</h1>
    );
}