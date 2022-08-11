import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    divWrapMedia: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1100px',
        margin: '16px auto 0 auto',

        '@media screen and (max-width: 820px)': {
            flexDirection: 'column',
        }
    },
}));