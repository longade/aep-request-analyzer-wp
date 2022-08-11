import { Link } from 'react-router-dom';
import useStyles from './styles';

export default function SidebarLink({ title, to }) {
    const classes = useStyles();

    return (
        <Link className={classes.link} to={to}>
            {title}
        </Link>
    );
}