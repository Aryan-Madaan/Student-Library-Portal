import * as React from "react";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import AddStudent from "./components/AddStudent";

import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function App() {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div>
        <Navbar />
        <Container maxWidth="xl">
          <Box py={3}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <SearchBar />
              <AddStudent />
            </Box>
            <Box m={3}>
              <Table />
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default App;
