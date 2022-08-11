import useStyles from './styles';
import { FaPizzaSlice } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';

export default function Bars() {
    const classes = useStyles();

    return (
        <MenuIcon className={classes.bars} />
    );
}