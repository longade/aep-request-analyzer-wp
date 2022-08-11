import useStyles from './styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Nav({ toggle }) {

    const classes = useStyles();

    return (
        <>
            <nav className={classes.navMain}>
                <div className={classes.divIcon}>
                    <div style={{ width: 30, cursor: 'pointer' }} onClick={toggle}>
                        <MenuIcon />
                    </div>
                </div>
                <div className={classes.divHomeLink}>
                    <Link className={classes.linkNav} to='/'>AEP</Link>
                </div>
            </nav>
        </>
    )
}