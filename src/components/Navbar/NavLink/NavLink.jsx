import useStyles from './styles';
import { Link } from 'react-router-dom';

export default function NavLink() {
    const classes = useStyles();

    return (
        <Link className={classes.linkNav} to='/'>AEP</Link>
    );
}