import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    TablePagination, TableSortLabel
} from '@mui/material';

const createData = (name, category, date) => {
    return { name, category, date };
}

const rows = [
    createData("badminton tournement quata finalist wester province", "Badminton", "2023-04-20"),
    createData("2nd Place in Singing Contest", "Singing", "2021-02-19"),
    createData("3rd Place in Music Event", "Music", "2023-11-23"),
    createData("Passed Term Test", "School", "2023-01-10"),
    createData("Passed IT Course", "Software Development", "2023-11-13"),
    createData("2nd Place in Running Event", "Athletics", "2023-03-13"),
    createData("Went to NASA", "Astronomy", "2023-08-13"),
    createData("Went to Ferrari Company", "Automobile", "2023-08-13"),
    createData("Badminton tournement runners up wester province ", "Badminton", "2024-01-20"),
    createData("Went to a workshop ", "Photography", "2023-08-20"),
    createData("Got a aplication to join a training camp  ", "Badminton", "2024-02-20")

];

const headCells = [
    { id: 'name', label: 'Achievement' },
    { id: 'category', label: 'Achievement Category' },
    { id: 'date', label: 'Date' },
];

const EnhancedTableHead = ({ order, orderBy, onRequestSort }) => {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    }

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}>
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

const MyAchievements = () => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div
            style={{
                background: 'linear-gradient(to bottom, #FF00CC , #333399)',
                minHeight: '100vh', // Set a minimum height to cover the whole viewport
                padding: '30px',
            }}
        >
            <Paper>
                <TableContainer>
                    <Table>
                        <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                        <TableBody>
                            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.category}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={3} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default MyAchievements;
