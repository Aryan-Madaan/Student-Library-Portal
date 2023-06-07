import {
  Button,
  Paper,
  Box,
  Grid,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({ palette: { mode: "dark" } });

const boxStyle = {
  mx: 4,
  py: 1,
  px: 4,
  fontSize: "1.5rem",
  whiteSpace: "nowrap",
  display: "flex",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Update = () => {
  const [name, setName] = useState("Rishabh Barnwal");
  const [id, setId] = useState("1234567890");
  const [email, setEmail] = useState("rishabh1234@gmail.com");
  const [phno, setPhno] = useState("1234-56-7890");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const idChangeHandler = (event) => {
    setId(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const phnoChangeHandler = (event) => {
    setPhno(event.target.value);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        my: 4,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Box>
          <Paper sx={{ py: 0.5, px: 2, borderRadius: "10px" }}>
            <Paper sx={{ my: 2, py: 2 }} elevation={16}>
              <Grid container pr={8} sx={containerStyle}>
                <Grid item xs={4}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">NAME</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box sx={boxStyle}>
                    <TextField
                      id="name"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      value={name}
                      onChange={nameChangeHandler}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container pr={8} sx={containerStyle}>
                <Grid item xs={4}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">ID NUMBER</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box sx={boxStyle}>
                    <TextField
                      id="id"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      value={id}
                      onChange={idChangeHandler}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container pr={8} sx={containerStyle}>
                <Grid item xs={4}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">EMAIL</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box sx={boxStyle}>
                    <TextField
                      id="email"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      value={email}
                      onChange={emailChangeHandler}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container pr={8} sx={containerStyle}>
                <Grid item xs={4}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">PHONE NUMBER</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box sx={boxStyle}>
                    <TextField
                      id="phno"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      value={phno}
                      onChange={phnoChangeHandler}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
        </Box>
      </ThemeProvider>
      <Box m={2}>
        <Button sx={{ mx: 2 }} size="large" variant="outlined" color="primary">
          UPDATE
        </Button>
        <Button sx={{ mx: 2 }} size="large" variant="outlined" color="error">
          CANCEL
        </Button>
      </Box>
    </Container>
  );
};

export default Update;
