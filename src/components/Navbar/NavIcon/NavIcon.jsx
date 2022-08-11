import Bars from '../Bars/Bars';
import useStyles from './styles';

export default function NavIcon({ toggle }) {
    const classes = useStyles();

    return (
        <div className={classes.divIcon} onClick={toggle}>
            {/* <p className={classes.pIcon}>Menu</p> */}
            <Bars />
        </div>
    );
}