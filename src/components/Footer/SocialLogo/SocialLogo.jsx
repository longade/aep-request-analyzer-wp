import useStyles from './styles';
import { Link } from 'react-router-dom';

export default function SocialLogo() {
    const classes = useStyles();

    return (
        <Link className={classes.linkLogo} to='/'>AEP</Link>
    );
}