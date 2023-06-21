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
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./Table.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Delete from "./Delete";

const theme = createTheme({
  palette: {
    mode: "light",
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
  const navigate = useNavigate();
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
    <ThemeProvider theme={theme}>
      <TableContainer
        component={Paper}
        elevation={12}
        sx={{ backgroundColor: "transparent" }}
        className="Table"
      >
        {isDelete1 && <Delete id={delstudent.id} />}
        {isDelete2 && <Delete id={delstudent.id} />}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "white", borderBottom: "none" }}>
                <Typography variant="h7">STUDENT NAME</Typography>
              </TableCell>
              <TableCell style={{ color: "white", borderBottom: "none" }}>
                <Typography variant="h7">STUDENT ID NUMBER</Typography>
              </TableCell>
              <TableCell style={{ color: "white", borderBottom: "none" }}>
                <Typography variant="h7">BOOK TITLE</Typography>
              </TableCell>
              <TableCell style={{ color: "white", borderBottom: "none" }}>
                <Typography variant="h7">BOOK CODE</Typography>
              </TableCell>
              <TableCell style={{ color: "white", borderBottom: "none" }}>
                <Typography variant="h7">ACTION</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studData.length === 0 ? (
              <TableRow>
                <TableCell style={{ color: "white", borderBottom: "none" }}>
                  <Typography variant="h6">NO DATA FOUND</Typography>
                </TableCell>
              </TableRow>
            ) : (
              studData.map((student) => (
                <TableRow key={student.id}>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Typography variant="h7">{student.name}</Typography>
                  </TableCell>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Typography variant="h7">{student.id}</Typography>
                  </TableCell>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Typography variant="h7">{student.email}</Typography>
                  </TableCell>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Typography variant="h7">{student.phno}</Typography>
                  </TableCell>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Box display="flex" alignItems="center">
                      <Box marginRight={1}>
                          <Button
                            size="medium"
                            variant="outlined"
                            color="success"
                            onClick={()=>{
                              navigate("/view", {
                                state: {
                                  stud: student,
                                },
                                replace: true,
                              });
                            }}
                          >
                            View
                          </Button>
                      </Box>
                      <Box marginRight={1}>
                          <Button
                            size="medium"
                            variant="outlined"
                            color="primary"
                           onClick={()=>{
                              navigate("/view", {
                                state: {
                                  stud: student,
                                },
                                replace: true,
                              });
                            }}
                          >
                            Update
                          </Button>
                      </Box>
                      <Box>
                        <Button
                          size="medium"
                          variant="outlined"
                          color="error"
                          onClick={(event) => {
                            event.preventDefault();
                            setDelStudent(student);
                            if (isDelete1) {
                              setIsDelete2(true);
                              setIsDelete1(false);
                            } else {
                              setIsDelete1(true);
                              setIsDelete2(false);
                            }
                          }
                          
                        }
                        >
                          Delete
                        </Button>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
};

export default BasicTable;
