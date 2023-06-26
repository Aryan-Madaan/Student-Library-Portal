import React from "react";
import {
  Paper,
  Grid,
  TextField,
  Button,
  styled,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const MainContainer = styled(Grid)({
  position: "fixed",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const PaperContainer = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  width: "30%",
  backgroundColor: "transparent",

  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
}));

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <MainContainer container justifyContent="center" alignItems="center">
      <ThemeProvider theme={theme}>
        <PaperContainer elevation={5}>
          <form onSubmit={handleLogin}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <TextField
                  label="Username"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </PaperContainer>
      </ThemeProvider>
    </MainContainer>
  );
};

export default Login;
