import {
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Box,
  Icon,
  Link,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={16}>
        <AppBar position="static" sx={{ bgcolor: "transparent" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography marginLeft={3} variant="h7" sx={{ color: "white" }}>
              <Link href="/" style={{ textDecoration: "none", color: "white" }}>
                HOME
              </Link>
            </Typography>
            <Paper
              elevation={1}
              sx={{ borderRadius: "10px", backgroundColor: "transparent" }}
            >
              <Typography variant="h6" sx={{ color: "white" }} py={1} px={2}>
                STUDENT DATABASE
              </Typography>
            </Paper>
            <Box display="flex" alignItems="center">
              <Icon style={{ color: "white", marginRight: "0.5rem" }}>
                <AccountCircleRoundedIcon fontSize="medium" />
              </Icon>
              <Typography
                marginRight={4}
                variant="h7"
                sx={{ color: "white", textAlign: "center" }}
              >
                ADMIN
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Paper>
    </ThemeProvider>
  );
};

export default Navbar;
