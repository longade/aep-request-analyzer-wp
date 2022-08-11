import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    menu: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(3, 80px)',
        textAlign: 'center',

        '@media screen and (max-width: 480px)': {
            gridTemplateRows: 'repeat(3, 60px)',
        }
    }
}));