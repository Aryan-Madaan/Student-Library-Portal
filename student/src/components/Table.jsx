import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@mui/material";
import { Link } from 'react-router-dom';



const BasicTable = ({studData}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>ID NUMBER</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>PHONE NUMBER</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studData.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.phno}</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Box marginRight={1}>
                  <Link to="/view" state={{stud:student}}>
                    <Button size="small" variant="outlined" color="success">
                      View
                    </Button>
                    </Link>
                  </Box>
                  <Box marginRight={1}>
                    
                    <Button size="small" variant="outlined" color="primary">
                      Update
                    </Button>
                    
                  </Box>
                  <Box>
                    <Button size="small" variant="outlined" color="error">
                      Error
                    </Button>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
