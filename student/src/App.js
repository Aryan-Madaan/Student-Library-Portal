import * as React from "react";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";


import "./App.css";
import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";

import studentDatabase from "./data/studentDatabase.json"

function App() {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div>
        <Navbar />
        <Container maxWidth="xl">
          <div>
            Hello
          </div>
          <SearchBar studentDetails={studentDatabase}/>
        </Container>
      </div>
    </div>
  );
}

export default App;
