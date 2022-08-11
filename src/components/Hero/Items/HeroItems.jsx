import useStyles from './styles';

export default function HeroItems() {
    const classes = useStyles();

    return (
        <div className={classes.itemsDiv}>
            <h1 className={classes.h1}>Adobe Experience Platform</h1>
            <p className={classes.p}>analytics requests analyzer</p>
            <button className={classes.button}>Go to Chrome Web Store</button>
        </div>
    );
}