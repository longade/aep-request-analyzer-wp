import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    linkNav: {
        color: '#fff',
        fontSize: '2rem',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        cursor: 'pointer',

        '@media screen and (max-width: 400px)': {
            position: 'absolute',
            top: '10px',
            left: '25px',
        }
    },
}));
