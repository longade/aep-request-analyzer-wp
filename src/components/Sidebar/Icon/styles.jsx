import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    icon: {
        position: 'absolute',
        top: '1.2rem',
        right: '1.5rem',
        background: 'transparent',
        border: 'transparent',
        fontSize: '2rem',
        cursor: 'pointer',
        outline: 'none',
        zIndex: 99,
    },
    closeIcon: {
        color: '#000',
    }
}));