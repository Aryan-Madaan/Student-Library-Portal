import {
  Button,
  Paper,
  Box,
  Grid,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

import { useState } from "react";

import "./Update.css";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import UpgradeIcon from "@mui/icons-material/Upgrade";
import CancelIcon from "@mui/icons-material/Cancel";

import { useLocation, useNavigate } from "react-router-dom";

// import studentDatabase from "../data/studentDatabase.json";

const darkTheme = createTheme({ palette: { mode: "light" } });

const boxStyle = {
  mx: 4,
  py: 1,
  px: 4,
  fontSize: "1.5rem",
  whiteSpace: "nowrap",
  display: "flex",
  color: "#c1c1c1",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const PaperContainer = styled(Paper)(({ theme }) => ({
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  borderRadius: "10px",
  backgroundColor: "transparent",
  backdropFilter: "blur(30px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Update = () => {
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   name: '',
  //   id: '',
  //   email: '',
  //   phno:'',
  // });

  // const handleSubmit = (event) => {

  // };

  const location = useLocation();
  var st = "";
  try {
    st = location.state.stud;
  } catch (e) {
    <div>ERROR READING STUDENT DATA</div>;
  }
  const originalId = st.id;
  const [name, setName] = useState(st.name);
  const [id, setId] = useState(st.id);
  const [email, setEmail] = useState(st.email);
  const [phno, setPhno] = useState(st.phno);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    // setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const idChangeHandler = (event) => {
    setId(event.target.value);
    // setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    // setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const phnoChangeHandler = (event) => {
    setPhno(event.target.value);
    // setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    // <form onSubmit={handleSubmit}>
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
          <PaperContainer elevation={3}>
            <Paper
              sx={{ my: 2, py: 2, backgroundColor: "transparent" }}
              elevation={12}
              className="Update"
            >
              <Grid container pr={4} sx={containerStyle}>
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
                      InputProps={{ style: { color: "#c1c1c1" } }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container pr={4} sx={containerStyle}>
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
                      InputProps={{ style: { color: "#c1c1c1" } }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container pr={4} sx={containerStyle}>
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
                      InputProps={{ style: { color: "#c1c1c1" } }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container pr={4} sx={containerStyle}>
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
                      InputProps={{ style: { color: "#c1c1c1" } }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            <Box m={2}>
              {/* <Link
          to="/view"
          state={{ stud: { name: name, id: id, phno: phno, email: email } }}
        > */}
              <Button
                sx={{ mx: 2 }}
                size="large"
                variant="outlined"
                color="primary"
                onClick={(event) => {
                  console.log(originalId);
                  event.preventDefault();

                  // Make the PUT request to your API endpoint
                  axios
                    .put(`${process.env.REACT_APP_NAME}/${id}`, {
                      name: name,
                      id: id,
                      phno: phno,
                      email: email,
                    })
                    .then((response) => {
                      // console.log({ name: name, id: id, phno: phno, email: email });
                      navigate("/view", {
                        state: {
                          stud: {
                            name: name,
                            id: id,
                            phno: phno,
                            email: email,
                          },
                        },
                        replace: true,
                      }); // Handle the API response
                    })
                    .catch((error) => {
                      console.error("error"); // Handle any error that occurs
                    });
                }}
                startIcon={<UpgradeIcon />}
              >
                UPDATE
              </Button>
              {/* </Link> */}
              {/* <Link to="/view" state={{ stud: st }}> */}
              <Button
                sx={{ mx: 2 }}
                size="large"
                variant="outlined"
                color="error"
                startIcon={<CancelIcon />}
                onClick={(event) => {
                  navigate("/view", {
                    state: { stud: st },
                    replace: true,
                  });
                }}
              >
                CANCEL
              </Button>
              {/* </Link> */}
            </Box>
          </PaperContainer>
        </Box>
      </ThemeProvider>
    </Container>
    // </form>
  );
};

export default Update;
