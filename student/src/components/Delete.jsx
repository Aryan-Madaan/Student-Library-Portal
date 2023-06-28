import React, { useState } from "react";
import axios from "axios";

import { Box, Button, Modal, Typography } from "@mui/material";

import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import { useLocation, useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  error: {
    main: "#fa4343",
  },
  primary: {
    main: "#00efff",
  },
  success: {
    main: "#5cff61",
  },
});

const BoxContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(50px)",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "5px",
  padding: "2.5rem",
  border: "1px solid #9f9f9f",
}));

const Delete = ({ id }) => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const deleteStudent = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_NAME}/${id}`
      );
      console.log(response.data);
      // Handle response
    } catch (error) {
      console.error(error);
      // Handle error
    }
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal open={open}>
        <BoxContainer>
          <Typography variant="h5" sx={{ color: "white" }}>
            Are you sure you want to delete this student?
          </Typography>
          <Box mt={3}>
            <Button
              size="large"
              variant="outlined"
              color="error"
              sx={{ mx: "1rem" }}
              startIcon={<DeleteIcon />}
              onClick={deleteStudent}
            >
              Confirm
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="success"
              sx={{ mx: "1rem" }}
              startIcon={<BlockIcon />}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </BoxContainer>
      </Modal>
    </ThemeProvider>
  );
};

export default Delete;
