import { Paper, AppBar, Typography, Toolbar, Box, Icon } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeButton from "./HomeButton";

import "./Navbar.css";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Paper
        elevation={16}
        sx={{ bgcolor: "transparent", backdropFilter: "blur(5px)" }}
        className="Navbar"
      >
        <AppBar position="static" sx={{ bgcolor: "transparent" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "transparent",
            }}
          >
            <HomeButton />
            <Paper
              elevation={8}
              sx={{ borderRadius: "10px", backgroundColor: "transparent" }}
            >
              <Typography variant="h6" sx={{ color: "white" }} py={1} px={2}>
                LEND DATABASE
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
