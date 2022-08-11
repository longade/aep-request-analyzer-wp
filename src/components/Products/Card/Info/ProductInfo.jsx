import useStyles from './styles';

export default function ProductInfo({ name, desc, price, button }) {
    const classes = useStyles();

    return (
        <div className={classes.infoDiv}>
            <h2 className={classes.title}>{name}</h2>
            <p className={classes.desc}>{desc}</p>
        </div>
    );
}