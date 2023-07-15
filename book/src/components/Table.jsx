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

const BasicTable = ({ bookData }) => {
  const navigate = useNavigate();
  const [isDelete1, setIsDelete1] = useState(false);
  const [isDelete2, setIsDelete2] = useState(false);
  const [delBook, setDelBook] = useState([]);
  // const deleteBtn = (event,book) => {
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
        {isDelete1 && <Delete id={delBook.id} />}
        {isDelete2 && <Delete id={delBook.id} />}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "white", borderBottom: "none" }}>
                <Typography variant="h7">TITLE</Typography>
              </TableCell>
              <TableCell style={{ color: "white", borderBottom: "none" }}>
                <Typography variant="h7">AUTHOR</Typography>
              </TableCell>
              <TableCell style={{ color: "white", borderBottom: "none" }}>
                <Typography variant="h7">DESCRIPTION</Typography>
              </TableCell>
              <TableCell style={{ color: "white", borderBottom: "none" }}>
                <Typography variant="h7">BOOKS ISSUED</Typography>
              </TableCell>
              <TableCell style={{ color: "white", borderBottom: "none" }}>
                <Typography variant="h7">BOOKS AVAILABLE</Typography>
              </TableCell>
              <TableCell style={{ color: "white", borderBottom: "none" }}>
                <Typography variant="h7">ACTION</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookData.length === 0 ? (
              <TableRow>
                <TableCell style={{ color: "white", borderBottom: "none" }}>
                  <Typography variant="h6">NO DATA FOUND</Typography>
                </TableCell>
              </TableRow>
            ) : (
              bookData.map((book) => (
                <TableRow key={book.id}>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Typography variant="h7">{book.name}</Typography>
                  </TableCell>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Typography variant="h7">{book.id}</Typography>
                  </TableCell>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Typography variant="h7">{book.email}</Typography>
                  </TableCell>
                  <TableCell style={{ color: "#c1c1c1", borderBottom: "none" }}>
                    <Typography variant="h7">{book.phno}</Typography>
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
                                book: book,
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
                          onClick={() => {
                            navigate("/view", {
                              state: {
                                book: book,
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
                            setDelBook(book);
                            if (isDelete1) {
                              setIsDelete2(true);
                              setIsDelete1(false);
                            } else {
                              setIsDelete1(true);
                              setIsDelete2(false);
                            }
                          }}
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
