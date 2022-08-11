import SidebarRoute from './Route/SidebarRoute';
import useStyles from './styles';

export default function ButtonWrap({ title }) {
    const classes = useStyles();

    return (
        <div className={classes.buttonWrap}>
            <SidebarRoute title={title} to='/' />
        </div>
    );
}