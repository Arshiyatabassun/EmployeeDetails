import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


// function createData({data}) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
const space1 = {
  m:2
}

function BasicTable({data,handleEdit,handleDelete,tableArr}) {
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell sx= {{fontWeight :'bold',fontSize:'large',background:'pink'}}>serial</TableCell>
            <TableCell sx= {{fontWeight :'bold',textAlign :'center',fontSize:'large',background:'pink'}}align="center">Name</TableCell>
            <TableCell  sx= {{fontWeight :'bold',textAlign :'center',fontSize:'large',background:'pink'}}align="center">Email-Id</TableCell>
            <TableCell  sx= {{fontWeight :'bold',textAlign :'center',fontSize:'large',background:'pink'}}align="center">PhoneNo</TableCell>
            <TableCell  sx= {{fontWeight :'bold',textAlign :'center',fontSize:'large',background:'pink'}}align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data,index) => (
            <TableRow key={index}>
              <TableCell>
                {index + 1}
              </TableCell>
              <TableCell align="center">{data.name}</TableCell>
              <TableCell align="center">{data.email}</TableCell>
              <TableCell align="center">{data.phoneno}</TableCell>
              <TableCell align="right">
                <Button variant="contained"
              onClick = {() => {
                handleEdit(index)
              }}
              color = 'success'
              sx = {space1}
          >Edit</Button>

          <Button variant="contained"
          onClick = {() => {
            handleDelete(index)
          }}
          color ='error'
        >Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default BasicTable