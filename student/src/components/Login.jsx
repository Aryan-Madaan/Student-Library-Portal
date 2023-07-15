import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Button,
  styled,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";

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
  backdropFilter: "blur(5px)",

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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_NAME}/login`, {
        email: email,
        password: pwd,
      })
      .then((res) => {
        console.log(res)
        navigate("/");
      })
      .catch((err) => {
        console.log(err)
        navigate("/login");
      });
  };

  return (
    <MainContainer container justifyContent="center" alignItems="center">
      <ThemeProvider theme={theme}>
        <PaperContainer elevation={3}>
          <form onSubmit={handleLogin}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <TextField
                  label="Email"
                  variant="outlined"
                  required
                  fullWidth
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  autoComplete="off"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                  onChange={(event) => {
                    setPwd(event.target.value);
                  }}
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
