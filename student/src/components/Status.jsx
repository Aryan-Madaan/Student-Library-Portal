import React, { useState } from "react";
import axios from "axios";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Box, Button, Modal, Typography, Paper } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  error: {
    main: "#fa4343",
  },
  success: {
    main: "#3fff46",
  },
});

const Status = () => {
  const [error, setError] = useState(false);
  // right now the buttons control the state
  // once we can axios the status from server, we can use that to control the state
  // and also display the message in the typography section

  return (
    <ThemeProvider theme={theme}>
      <Modal open={true}>
        <Box
          component={Paper}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "10px",
            py: "1rem",
            px: "2rem",
          }}
          elevation={16}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {error ? "Error" : "Success"}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            {error ? "Something went wrong" : "Student deleted successfully"}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              size="large"
              variant="outlined"
              color="error"
              sx={{ mx: 1 }}
              onClick={() => setError(true)}
            >
              Error
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="success"
              sx={{ mx: 1 }}
              onClick={() => setError(false)}
            >
              Success
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default Status;
