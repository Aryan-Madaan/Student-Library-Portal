import { React, useState } from "react";

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
import { Link } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Delete from "./Delete";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    error: {
      main: "#fa4343",
    },
    primary: {
      main: "#00efff",
    },
    success: {
      main: "#5cff61",
    },
  },
});

const BasicTable = ({ studData }) => {
  const [isDelete1, setIsDelete1] = useState(false);
  const [isDelete2, setIsDelete2] = useState(false);
  const [delstudent, setDelStudent] = useState([]);
  // const deleteBtn = (event,student) => {
  //   event.preventDefault();
  //   if (isDelete1) {
  //     setIsDelete2(true);
  //     setIsDelete1(false);
  //   } else {
  //     setIsDelete1(true);
  //     setIsDelete2(false);
  //   }
  // };

  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer component={Paper} elevation={12}>
        {isDelete1 && <Delete id={delstudent.id}/>}
        {isDelete2 && <Delete id={delstudent.id}/>}
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
                      <Link to="/view" state={{ stud: student }}>
                        <Button
                          size="medium"
                          variant="outlined"
                          color="success"
                        >
                          View
                        </Button>
                      </Link>
                    </Box>
                    <Box marginRight={1}>
                      <Link to="/update" state={{ stud: student }}>
                        <Button
                          size="medium"
                          variant="outlined"
                          color="primary"
                        >
                          Update
                        </Button>
                      </Link>
                    </Box>
                    <Box>
                      <Button
                        size="medium"
                        variant="outlined"
                        color="error"
                        onClick={(event) => {
                          event.preventDefault();
                          setDelStudent(student)
                          if (isDelete1) {
                            setIsDelete2(true);
                            setIsDelete1(false);
                          } else {
                            setIsDelete1(true);
                            setIsDelete2(false);
                          }}
                        }
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default BasicTable;
