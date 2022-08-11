import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import useStyles from './styles';
import rows from '../../pages/Menu/data';
import TablePaginationActions from './Pagination/TablePaginationActions';

const StyledTableHeadCell = ({ children }) => {
    const classes = useStyles();

    return (
        <TableCell className={classes.headerCell}>
            {children}
        </TableCell>
    );
}

const StyledTableRowCell = ({ children }) => {
    const classes = useStyles();

    return (
        <TableRow className={classes.rowCell}>
            {children}
        </TableRow>
    );
}

export default function MenuTable() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableHeadCell>Pizza</StyledTableHeadCell>
                        <StyledTableHeadCell align="left">Ingredienti</StyledTableHeadCell>
                        <StyledTableHeadCell align="right">Prezzo (€)</StyledTableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row, index) => (
                        <StyledTableRowCell
                            key={row.name + "_" + index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableHeadCell component="th" scope="row">
                                {row.name}
                            </StyledTableHeadCell>
                            <StyledTableHeadCell align="left">{row.ingredients}</StyledTableHeadCell>
                            <StyledTableHeadCell align="right">{row.price}</StyledTableHeadCell>
                        </StyledTableRowCell>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}