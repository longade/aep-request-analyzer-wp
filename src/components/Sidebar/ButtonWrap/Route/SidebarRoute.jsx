import { Link } from 'react-router-dom';
import useStyles from './styles';

export default function SidebarRoute({ title, to }) {
    const classes = useStyles();

    return (
        <Link className={classes.route} to={to}>
            {title}
        </Link>
    );
}