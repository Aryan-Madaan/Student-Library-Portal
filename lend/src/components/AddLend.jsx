import { Box, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const AddStudent = () => {
  const navigate = useNavigate()
  return (
    <Box marginTop={4} marginRight={3}>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" onClick={()=>{
          navigate("/add");
        }}>+ ADD LEND</Button>
      </ThemeProvider>
    </Box>
  );
};

export default AddStudent;
