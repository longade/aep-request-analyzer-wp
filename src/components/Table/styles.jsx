import { makeStyles } from "@mui/styles";
import { tableCellClasses } from '@mui/material/TableCell';

export default makeStyles(({
    headerCell: {
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#ffc500',
            color: 'black',
            fontWeight: 'bold',
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    },
    rowCell: {
        '&:nth-of-type(odd)': {
            backgroundColor: 'lightgrey',
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }
}));