import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    itemsDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100vh',
        maxHeight: '100%',
        padding: '0 2rem',
        width: '650px',
        color: '#fff',
        textTransform: 'uppercase',
        lineHeight: 1,
        fontWeight: 'bold',

        '@media screen and (max-width: 650px)': {
            width: '100%',
        }
    },
    h1: {
        fontSize: 'clamp(2.5rem, 10vw, 5rem)',
        marginBottom: '1rem',
        boxShadow: '3px 5px #e9ba23',
        letterSpacing: '3px',
    },
    p: {
        fontSize: 'clamp(2rem, 2.5vw, 3rem)',
        marginBottom: '2rem',
    },
    button: {
        fontSize: '1.4rem',
        padding: '1rem 4rem',
        border: 'none',
        background: '#e31837',
        color: '#fff',
        transition: '0.2s ease-out',

        '&:hover': {
            background: '#ffc500',
            transition: '0.2s ease-out',
            cursor: 'pointer',
            color: '#000',
        }
    }
}));