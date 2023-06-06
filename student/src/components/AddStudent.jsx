import { Paper, IconButton, InputBase, Box, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const AddStudent = () => {
  return (
    <Box marginTop={4} marginRight={3}>
      <ThemeProvider theme={theme}>
        <Button variant="outlined">+ ADD STUDENT</Button>
      </ThemeProvider>
    </Box>
  );
};

export default AddStudent;
