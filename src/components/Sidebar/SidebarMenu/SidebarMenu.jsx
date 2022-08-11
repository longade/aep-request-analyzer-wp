import useStyles from './styles';

export default function SidebarMenu({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.menu}>
            {children}
        </div>
    );
}