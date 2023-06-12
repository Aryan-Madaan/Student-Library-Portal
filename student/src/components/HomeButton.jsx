import { Typography, Link } from "@mui/material";

import { useLocation } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

const HomeButton = () => {
  const loc = useLocation();
  if (loc.pathname !== "/") {
    return (
      <Typography marginLeft={3} variant="h7" sx={{ color: "white" }}>
        <Link
          href="/"
          underline="none"
          color="inherit"
          style={{ display: "flex", alignItems: "center" }}
        >
          <HomeIcon sx={{ marginRight: "0.5rem" }} />
          HOME
        </Link>
      </Typography>
    );
  } else {
    return (
      <Typography marginLeft={3} variant="h7" sx={{ color: "white" }}>
        STEEL BOYS
      </Typography>
    );
  }
};

export default HomeButton;
