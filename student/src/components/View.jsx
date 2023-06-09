import React, { useState } from "react";

import { Button, Paper, Box, Grid, Typography } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation, Link } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";

import Delete from "./Delete";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const boxStyle = {
  mx: 2,
  py: 1,
  px: 2,
  fontSize: "1.5rem",
  whiteSpace: "nowrap",
};

const View = () => {
  const [isDelete1, setIsDelete1] = useState(false);
  const [isDelete2, setIsDelete2] = useState(false);

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

  const location = useLocation();

  var st = "";
  try {
    st = location.state.stud;
  } catch (e) {
    return "Sorry the webpage you are looking for is not available";
  }

  return (
    <Box
      my={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <ThemeProvider theme={darkTheme}>
        <Box>
          <Paper sx={{ py: 0.5, px: 2, borderRadius: "10px" }}>
            <Paper sx={{ my: 2, py: 2 }} elevation={16}>
              <Grid container pr={8}>
                <Grid item xs={6}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">NAME</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">{st.name}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container pr={8}>
                <Grid item xs={6}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">ID NUMBER</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">{st.id}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container pr={8}>
                <Grid item xs={6}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">EMAIL</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">{st.email}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container pr={8}>
                <Grid item xs={6}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">PHONE NUMBER</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">{st.phno}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
        </Box>
      </ThemeProvider>
      <Box m={2}>
        <Link to="/update" state={{ stud: st }}>
          <Button
            sx={{ mx: 2 }}
            size="large"
            variant="outlined"
            color="primary"
            startIcon={<UpgradeIcon />}
          >
            UPDATE
          </Button>
        </Link>
        <Button
          sx={{ mx: 2 }}
          size="large"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={deleteBtn}
        >
          DELETE
        </Button>
        {isDelete1 && <Delete />}
        {isDelete2 && <Delete />}
      </Box>
    </Box>
  );
};

export default View;
