import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';





const CustomTable = ({ responseData }) => {

    return (
        <TableContainer component={Paper} >
            <Table sx={{ backgroundColor: "#6D83FF" }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 2 } }}>
                        <TableCell>Kelimeler</TableCell>
                        <TableCell align="right">Birleştirilmiş Kelime</TableCell>
                        <TableCell align="right">Süre</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        key={"deneme"}
                        sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
                    >
                        <TableCell component="th" scope="row" >
                            {responseData.words.map((word, index) => (responseData.words.length - 1) === index ? word : word + ",")}
                        </TableCell>
                        <TableCell align="right">{responseData.mergedWord}</TableCell>
                        <TableCell align="right">{responseData.time + " sn"}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );

};


export default CustomTable;