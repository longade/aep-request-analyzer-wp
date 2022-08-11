import useStyles from './styles';
import { FaTimes } from 'react-icons/fa';

export default function Icon({ toggle }) {
    const classes = useStyles();

    return (
        <div className={classes.icon} onClick={toggle}>
            <FaTimes className={classes.closeIcon} />
        </div>
    );
}