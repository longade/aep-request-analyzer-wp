import useStyles from './styles';

export default function ProductImage({ src, alt }) {
    const classes = useStyles();

    return (
        <img className={classes.img} src={src} alt={alt}></img>
    );
}