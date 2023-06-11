import {
    Typography,
    Link
  } from "@mui/material";
import { useLocation } from 'react-router-dom'

const HomeButton = () => {
const loc = useLocation();
if(loc.pathname!=="/")
{
    return(
<Typography marginLeft={3} variant="h7" sx={{ color: "white" }}>
              <Link href="/" style={{ textDecoration: "none", color: "white" }}>
                HOME
              </Link> 
</Typography>);
}
else
{
    return (<Typography marginLeft={3} variant="h7" sx={{ color: "white" }}>
      STEEL BOYS
</Typography>);
}
}


export default HomeButton;