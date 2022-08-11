import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    button: {
        fontSize: '1.4rem',
        padding: '0.6rem 3rem',
        border: 'none',
        background: '#ffc500',
        color: '#000',
        transition: '0.2s ease-out',
        
        '&:hover': {
            color: '#fff',
            background: '#e31837',
            transition: '0.2s ease-out',
            cursor: 'pointer',
        }
    },
}));