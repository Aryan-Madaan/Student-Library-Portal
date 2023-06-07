import { Button, Paper, Box, Grid, Typography } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const boxStyle = {
  mx: 2,
  py: 1,
  px: 2,
  fontSize: "1.5rem",
  whiteSpace: "nowrap",
};

const View = () => {
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
                    <Typography variant="h6">Rishabh Barnwal</Typography>
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
                    <Typography variant="h6">1234567890</Typography>
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
                    <Typography variant="h6">rishabh1234@gmail.com</Typography>
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
                    <Typography variant="h6">1234-56-7890</Typography>
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
          DELETE
        </Button>
      </Box>
    </Box>
  );
};

export default View;
