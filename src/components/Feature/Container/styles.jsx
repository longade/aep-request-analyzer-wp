import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    div: {
        background: '#0bad8e',
        maxHeight: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#fff',
        padding: 10
    },
    h1: {
        fontSize: 'clamp(3rem, 5vw, 5rem)',
    },
    p: {
        marginBottom: '1rem',
        fontSize: 'clamp(1rem, 3vw, 2rem)',
    },
    divVideo: {
        width: '800px',
        height: '430px',
        '@media screen and (max-width: 600px)': {
            width: '100%',
            height: '100%'
        }
    },
    exampleVideo: {
        width: '100%',
        height: 'auto',
    }
}));