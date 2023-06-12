import React, { useState } from "react";
import axios from "axios";

import { Box, Button, Modal, Typography } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";

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

const Delete = ({ id }) => {
  const [open, setOpen] = useState(true);

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const deleteStudent = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/students/${id}`
      );
      console.log(response.data);
      // Handle response
    } catch (error) {
      console.error(error);
      // Handle error
    }
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal open={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            background: "#414141ed",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
            py: "1rem",
            px: "2rem",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            Are you sure you want to delete this student?
          </Typography>
          <Box>
            <Button
              size="large"
              variant="outlined"
              color="error"
              sx={{ m: "1rem" }}
              startIcon={<DeleteIcon />}
              onClick={deleteStudent}
            >
              Confirm
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="success"
              sx={{ m: "1rem" }}
              startIcon={<BlockIcon />}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default Delete;
