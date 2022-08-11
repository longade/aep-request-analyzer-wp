import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    infoDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center',
    },
    title: {
        fontWeight: 400,
        fontSize: '1.5rem',
    },
    desc: {
        marginBottom: '1rem',
    },
    price: {
        marginBottom: '1rem',
        fontSize: '2rem',
    },
    button: {
        fontSize: '1rem',
        padding: '1rem 4rem',
        border: 'none',
        background: '#e31837',
        color: '#fff',
        transition: '0.2 ease-out',

        '&:hover': {
            background: '#ffc500',
            transition: '0.2s ease-out',
            cursor: 'pointer',
            color: '#000',
        }
    }
}));