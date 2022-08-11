import useStyles from './styles';

export default function FooterWrap({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.divWrap}>
            {children}
        </div>
    );
}