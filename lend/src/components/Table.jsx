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

const dummyData = [
  {
    STUDENT_NAME: "John Doe",
    STUDENT_ID_NUMBER: "123456789",
    BOOK_TITLE: "The Great Gatsby",
    BOOK_CODE: "ABC123",
  },
  {
    STUDENT_NAME: "Alice Smith",
    STUDENT_ID_NUMBER: "987654321",
    BOOK_TITLE: "To Kill a Mockingbird",
    BOOK_CODE: "DEF456",
  },
  {
    STUDENT_NAME: "Emily Johnson",
    STUDENT_ID_NUMBER: "456789123",
    BOOK_TITLE: "Pride and Prejudice",
    BOOK_CODE: "GHI789",
  },
  {
    STUDENT_NAME: "Michael Williams",
    STUDENT_ID_NUMBER: "321654987",
    BOOK_TITLE: "1984",
    BOOK_CODE: "JKL012",
  },
  {
    STUDENT_NAME: "Sarah Brown",
    STUDENT_ID_NUMBER: "654321987",
    BOOK_TITLE: "The Catcher in the Rye",
    BOOK_CODE: "MNO345",
  },
];

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
  const [delLend, setDelLend] = useState([]);
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
        sx={{ backgroundColor: "transparent", backdropFilter: "blur(20px)" }}
        className="Table"
      >
        {isDelete1 && <Delete id={delLend.id} />}
        {isDelete2 && <Delete id={delLend.id} />}
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
                <Typography variant="h7">ACTION</Typography>
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
            {dummyData.length === 0 ? (
              <TableRow>
                <TableCell style={{ color: "white", borderBottom: "none" }}>
                  <Typography variant="h6">NO DATA FOUND</Typography>
                </TableCell>
              </TableRow>
            ) : (
              dummyData.map((data) => (
                <TableRow key={`${data.STUDENT_ID_NUMBER}-${data.BOOK_CODE}`}>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Typography variant="h7">{data.STUDENT_NAME}</Typography>
                  </TableCell>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Typography variant="h7">
                      {data.STUDENT_ID_NUMBER}
                    </Typography>
                  </TableCell>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Box display="flex" alignItems="center">
                      <Box marginRight={1}>
                        <Button
                          size="medium"
                          variant="outlined"
                          color="success"
                          onClick={() => {
                            navigate("/view", {
                              state: {
                                stud: data,
                              },
                              replace: true,
                            });
                          }}
                        >
                          View Student
                        </Button>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Typography variant="h7">{data.BOOK_TITLE}</Typography>
                  </TableCell>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Typography variant="h7">{data.BOOK_CODE}</Typography>
                  </TableCell>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Box display="flex" alignItems="center">
                      <Box marginRight={1}>
                        <Button
                          size="medium"
                          variant="outlined"
                          color="success"
                          onClick={() => {
                            navigate("/view", {
                              state: {
                                stud: data,
                              },
                              replace: true,
                            });
                          }}
                        >
                          View Book
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          size="medium"
                          variant="outlined"
                          color="error"
                          onClick={(event) => {
                            event.preventDefault();
                            setDelLend(data);
                            if (isDelete1) {
                              setIsDelete2(true);
                              setIsDelete1(false);
                            } else {
                              setIsDelete1(true);
                              setIsDelete2(false);
                            }
                          }}
                        >
                          Delete Lending
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
