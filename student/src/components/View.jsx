import React, { useState } from "react";

import {
  Button,
  Paper,
  Box,
  Grid,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import HomeIcon from "@mui/icons-material/Home";

import Delete from "./Delete";
import "./View.css";

const darkTheme = createTheme({
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

const boxStyle = {
  px: 8,
  py: 1,
  fontSize: "1.5rem",
  whiteSpace: "nowrap",
  color: "#c1c1c1",
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

  var st = "";
  try {
    st = location.state.stud;
  } catch (e) {
    console.log(location.state);
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
          <PaperContainer>
            <Paper
              sx={{ my: 2, py: 4, backgroundColor: "transparent" }}
              elevation={12}
              className="View"
            >
              <Grid container item sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">NAME</Typography>
                  </Box>
                </Grid>
                <Grid container item xs={6} sx={{ justifyContent: "flex-end" }}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">{st.name}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container item sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">ID NUMBER</Typography>
                  </Box>
                </Grid>
                <Grid container item xs={6} sx={{ justifyContent: "flex-end" }}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">{st.id}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container item sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">EMAIL</Typography>
                  </Box>
                </Grid>
                <Grid container item xs={6} sx={{ justifyContent: "flex-end" }}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">{st.email}</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container item sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">PHONE NUMBER</Typography>
                  </Box>
                </Grid>
                <Grid container item xs={6} sx={{ justifyContent: "flex-end" }}>
                  <Box sx={boxStyle}>
                    <Typography variant="h6">{st.phno}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            <Box m={2}>
              <Button
                sx={{ mx: 2 }}
                size="large"
                variant="outlined"
                color="success"
                startIcon={<HomeIcon />}
                onClick={() => {
                  navigate("/", {
                    state: { stud: st },
                    replace: true,
                  });
                }}
              >
                Home
              </Button>
              <Button
                sx={{ mx: 2 }}
                size="large"
                variant="outlined"
                color="primary"
                startIcon={<UpgradeIcon />}
                onClick={() => {
                  navigate("/update", {
                    state: { stud: st },
                    replace: true,
                  });
                }}
              >
                UPDATE
              </Button>
              <Button
                sx={{ mx: 2 }}
                size="large"
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={(event) => {
                  event.preventDefault();
                  setDelStudent(st);
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
          </PaperContainer>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default View;
