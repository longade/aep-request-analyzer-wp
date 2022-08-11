import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
    createStyles({
        '@global': {
            '*': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0,
                fontFamily: 'Kanit, sans-serif',
            },
            'body': {
                height: '100vh',
                minHeight: '100vh',
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
            }
        }
    })
);

export default function GlobalStyle() {
    useStyles();

    return null;
};
