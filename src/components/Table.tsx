import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


type tableProp = {
    rows:any[],
    cols:any[],
}

export default function DynamicTable(props:tableProp) {
    const {rows,cols} = props
  return (
    <TableContainer component={Paper} sx={{marginTop:10}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
                cols.map((x,i)=> 
                <TableCell sx={{fontWeight:'bold'}}>
                     {x.heading} 
                </TableCell>) 
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((x,i) => 
           <TableRow key={i}>
            {
                cols.map((y,j)=>
                <TableCell>{x.idCard? x[y.data] : x[y.data]}</TableCell>
                )
            }
           </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
