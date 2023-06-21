import React, { useState } from "react";

import { Button, Paper, Box, Grid, Typography } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import Delete from "./Delete";

const darkTheme = createTheme({ palette: { mode: "light" } });
const boxStyle = {
  px: 8,
  py: 1,
  fontSize: "1.5rem",
  whiteSpace: "nowrap",
  color: "#c1c1c1",
};

const View = () => {
  const [isDelete1, setIsDelete1] = useState(false);
  const [isDelete2, setIsDelete2] = useState(false);
  const [delstudent, setDelStudent] = useState([]);

  const deleteBtn = (event) => {
    event.preventDefault();
    if (isDelete1) {
      setIsDelete2(true);
      setIsDelete1(false);
    } else {
      setIsDelete1(true);
      setIsDelete2(false);
    }
  };
  const navigate = useNavigate();
  const location = useLocation();

  // var st = "";
  // try {
  //   st = location.state.stud;
  // } catch (e) {
  //   console.log(location.state)
  //   return "Sorry the webpage you are looking for is not available";
  // }

  return (
    <Box
      my={8}
      mx={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <ThemeProvider theme={darkTheme}>
        <Box borderTop={4} borderColor="white">
          <Paper
            sx={{
              py: 0.5,
              px: 2,
              backgroundColor: "transparent",
            }}
          >
            <Grid container px={2} sx={{ justifyContent: "space-between" }}>
              <Grid
                container
                item
                xs={6}
                px={2}
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h5" sx={{ color: "white" }} pt={2}>
                  STUDENT DATA
                </Typography>
                <Paper
                  sx={{
                    my: 2,
                    py: 2,
                    backgroundColor: "transparent",
                  }}
                  elevation={5}
                >
                  <Grid
                    container
                    px={2}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Grid item xs={6}>
                      <Box sx={boxStyle}>
                        <Typography variant="h6">NAME:</Typography>
                      </Box>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      <Box sx={boxStyle}>
                        <Typography variant="h6">DATA</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    px={2}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Grid item xs={6}>
                      <Box sx={boxStyle}>
                        <Typography variant="h6">ID NUMBER:</Typography>
                      </Box>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      <Box sx={boxStyle}>
                        <Typography variant="h6">DATA</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    px={2}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Grid item xs={6}>
                      <Box sx={boxStyle}>
                        <Typography variant="h6">EMAIL:</Typography>
                      </Box>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      <Box sx={boxStyle}>
                        <Typography variant="h6">DATA</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    px={2}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Grid item xs={6}>
                      <Box sx={boxStyle}>
                        <Typography variant="h6">PHONE NUMBER:</Typography>
                      </Box>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      <Box sx={boxStyle}>
                        <Typography variant="h6">DATA</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid
                container
                item
                xs={6}
                px={2}
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h5" sx={{ color: "white" }} pt={2}>
                  BOOK DATA
                </Typography>
                <Paper
                  sx={{
                    my: 2,
                    py: 2,
                    backgroundColor: "transparent",
                  }}
                  elevation={5}
                >
                  <Grid
                    container
                    px={2}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Grid item xs={6}>
                      <Box sx={boxStyle}>
                        <Typography variant="h6">TITLE</Typography>
                      </Box>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      <Box sx={boxStyle}>
                        <Typography variant="h6">DATA</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    px={2}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Grid item xs={6}>
                      <Box sx={boxStyle}>
                        <Typography variant="h6">CODE</Typography>
                      </Box>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      <Box sx={boxStyle}>
                        <Typography variant="h6">DATA</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    px={2}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Grid item xs={6}>
                      <Box sx={boxStyle}>
                        <Typography variant="h6">AUTHOR</Typography>
                      </Box>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      <Box sx={boxStyle}>
                        <Typography variant="h6">DATA</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    px={2}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Grid item xs={6}>
                      <Box sx={boxStyle}>
                        <Typography variant="h6">DESCRIPTION</Typography>
                      </Box>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      <Box
                        sx={{
                          px: 8,
                          py: 1,
                          fontSize: "1.5rem",
                          color: "#c1c1c1",
                        }}
                      >
                        <Typography variant="h6">DATA</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </ThemeProvider>
      <Box my={4}>
        <Button
          sx={{ mx: 2 }}
          size="large"
          variant="outlined"
          color="primary"
          startIcon={<ArrowBackIosNewIcon />}
        >
          BACK
        </Button>
        <Button
          sx={{ mx: 2 }}
          size="large"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={(event) => {
            event.preventDefault();
            // setDelStudent(st);
            if (isDelete1) {
              setIsDelete2(true);
              setIsDelete1(false);
            } else {
              setIsDelete1(true);
              setIsDelete2(false);
            }
          }}
        >
          DELETE
        </Button>
        {isDelete1 && <Delete id={delstudent.id} />}
        {isDelete2 && <Delete id={delstudent.id} />}
      </Box>
    </Box>
  );
};

export default View;
