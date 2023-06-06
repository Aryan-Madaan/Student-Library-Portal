import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography marginLeft={3} variant="h7" sx={{ color: "black" }}>
          STEEL BOYS
        </Typography>
        <Typography variant="h6" sx={{ color: "black" }}>
          STUDENT DATABASE
        </Typography>
        <Box display="flex" alignItems="center">
          <Icon style={{ color: "black", marginRight: "0.5rem" }}>
            <AccountCircleRoundedIcon fontSize="medium" />
          </Icon>
          <Typography marginRight={4} variant="h7" sx={{ color: "black", textAlign: "center" }}>
            ADMIN
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
