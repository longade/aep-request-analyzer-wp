import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        textDecoration: 'none',
        listStyle: 'none',
        transition: '0.2s ease-in-out',
        color: '#000',
        cursor: 'pointer',

        '&:hover': {
            color: '#e31837',
            transition: '0.2s ease-in-out',
        }
    }
}));