import useStyles from './styles';

export default function SocialMediaWrap({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.divWrapMedia}>
            {children}
        </div>
    );
}