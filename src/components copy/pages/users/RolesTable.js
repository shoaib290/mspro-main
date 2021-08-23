import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';



const useStyles = makeStyles({
    table: {
        minWidth: 650,
        backgroundColor:"#E4E6F4"
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Purchase Orders', 159, 6.0, 24, 4.0),
    createData('Quotations', 237, 9.0, 37, 4.3),
    createData('TimeSheets', 262, 16.0, 24, 6.0),
    createData('Man Power', 305, 3.7, 67, 4.3),
    createData('Delivery Notes', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">Admin</TableCell>
                        <TableCell align="right">Acess Users</TableCell>
                        <TableCell align="right">Make Payments</TableCell>
                        <TableCell align="right">Make Orders</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>

                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>

                            <TableCell align="right">
                                <Checkbox
                                    defaultChecked
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />

                            </TableCell>

                            <TableCell align="right"> 
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            /></TableCell>

                            <TableCell align="right">
                                <Checkbox
                                    defaultChecked
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </TableCell>

                            <TableCell align="right">
                                <Checkbox
                                    defaultChecked
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
