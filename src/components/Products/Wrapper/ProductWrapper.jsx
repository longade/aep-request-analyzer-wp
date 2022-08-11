import useStyles from './styles';

export default function ProductWrapper({children}) {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    );
}