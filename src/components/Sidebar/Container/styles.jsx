import { makeStyles } from "@mui/styles";

export default makeStyles(({
    paper: {
        backgroundColor: '#0bad8e !important',
        width: 350,
        '@media screen and (max-width: 400px)': {
            width: '100%',
        },
    },
}));