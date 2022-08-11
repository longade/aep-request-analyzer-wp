import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    route: {
        background: '#e31837',
        whiteSpace: 'nowrap',
        padding: '16px 64px',
        color: '#fff',
        fontSize: '16px',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        transition: '0.2s ease-in-out',
        textDecoration: 'none',

        '&:hover': {
            transition: '0.2s ease-in-out',
            background: '#fff',
            color: '#010606',
        }
    }
}));