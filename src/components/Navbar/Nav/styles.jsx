import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    navMain: {
        position: 'fixed',
        width: '100%',
        background: '#0d0909',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media screen and (max-width: 600px)': {
            justifyContent: 'space-between'
        }
    },
    divIcon: {
        display: 'block',
        color: '#fff',
        flex: 1,
        position: 'relative',
        left: 30
    },
    divHomeLink: {
        flex: 1,

        '&::after': {
            content: '""',
            flex: 1
        },

        '@media screen and (max-width: 600px)': {
            position: 'relative',
            right: 30,
            flex: 0
        }
    },
    linkNav: {
        color: '#fff',
        fontSize: '2rem',
        textDecoration: 'none',

        /* '@media screen and (max-width: 400px)': {
            position: 'absolute',
            top: '10px',
            left: '25px',
        } */
    },
}));
