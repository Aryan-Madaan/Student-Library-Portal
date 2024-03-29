import {
  Button,
  Paper,
  Box,
  Grid,
  Container,
  TextField,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";
import axios from "axios";

import Loading from "./Loading";

import { useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import UpgradeIcon from "@mui/icons-material/Upgrade";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";

import { useLocation, useNavigate } from "react-router-dom";

// import studentDatabase from "../data/studentDatabase.json";

const theme = createTheme({ palette: { mode: "light" } });

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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

const AddStudentPage = () => {
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
    <div>ERROR READING LEND DATA</div>;
  }
  const [isDisabled, setDisabled] = useState(true);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");

  const [data, setData] = useState([]);
  const [searchStudent, setSearchStudent] = useState("");
  const [searchBook, setSearchBook] = useState("");

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

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedBooks, setSelectedBooks] = useState([]);

  const handleChangeStudent = (event) => {
    setSearchStudent(event.target.value);
  };

  const handleChangeBook = (event) => {
    setSearchBook(event.target.value);
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
      <ThemeProvider theme={theme}>
        {!isDisabled && <Loading />}
        <Box>
          <Paper
            sx={{
              py: 0.5,
              px: 2,
              borderRadius: "10px",
              backgroundColor: "transparent",
            }}
          >
            <Paper
              sx={{ my: 2, py: 2, backgroundColor: "transparent" }}
              elevation={16}
              className="Update"
            >
              <Grid container pr={8} sx={containerStyle}>
                <Grid item xs={4}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">STUDENT NAME</Typography>
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
                      InputProps={{
                        style: { color: "#c1c1c1" },
                        autoComplete: "off", // Add this line
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container pr={8} sx={containerStyle}>
                <Grid item xs={4}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">STUDENT ID NUMBER</Typography>
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
                      InputProps={{
                        style: { color: "#c1c1c1" },
                        autoComplete: "off", // Add this line
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container pr={8} sx={containerStyle}>
                <Grid item xs={4}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">BOOK NAME</Typography>
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
                      InputProps={{
                        style: { color: "#c1c1c1" },
                        autoComplete: "off", // Add this line
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container pr={8} sx={containerStyle}>
                <Grid item xs={4}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">BOOK CODE</Typography>
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
                      InputProps={{
                        style: { color: "#c1c1c1" },
                        autoComplete: "off", // Add this line
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
        </Box>
      </ThemeProvider>
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
            //   console.log(originalId);
            event.preventDefault();

            if (!name || !email || !phno || !id) {
              alert("Please fill in all the fields.");
              return;
            }
            setDisabled(false);
            // Make the POST request to your API endpoint
            axios
              .post(process.env.REACT_APP_NAME, {
                name: name,
                id: id,

                phno: phno,
                email: email,
              })
              .then((response) => {
                setDisabled(true);
                // console.log({ name: name, id: id, phno: phno, email: email });
                navigate("/view", {
                  state: {
                    stud: { name: name, id: id, phno: phno, email: email },
                  },
                  replace: true,
                }); // Handle the API response
              })
              .catch((error) => {
                setDisabled(true);
                console.error("error"); // Handle any error that occurs
              });
          }}
          startIcon={<UpgradeIcon />}
        >
          ADD
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
            navigate("/", {
              // state: { stud: st },
              replace: true,
            });
          }}
        >
          CANCEL
        </Button>
        {/* </Link> */}
      </Box>
      <ThemeProvider theme={darkTheme}>
        <Box py={3}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box marginTop={4} marginRight={3}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
                elevation={3}
              >
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, width: 400 }}
                  type="search"
                  placeholder="Search Student"
                  value={searchStudent}
                  onChange={handleChangeStudent}
                />
              </Paper>
            </Box>
            <Box marginTop={4} marginLeft={3}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
                elevation={3}
              >
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, width: 400 }}
                  type="search"
                  placeholder="Search Book"
                  value={searchBook}
                  onChange={handleChangeBook}
                />
              </Paper>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
    // </form>
  );
};

export default AddStudentPage;
