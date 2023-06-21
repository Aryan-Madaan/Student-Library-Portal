import React, { useState,useEffect } from "react";

import axios from "axios";

import { Paper, InputBase, IconButton, Box } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Table from "./Table";
import AddStudent from "./NewLending";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const SearchBar = () => {

  const [data, setData] = useState([]);
  
  const [searchField, setSearchField] = useState("");
  const [focus, setFocus] = useState(8);
  
  const fetchData = async () => {
    try {
      // console.log(process.env.REACT_APP_NAME);
      const response = await axios.get(process.env.REACT_APP_NAME);
      
      // console.log(response.json())
      // console.log(response.data);
      const jsonData = response.data;
      // console.log(jsonData)
      setData(jsonData);
      // console.log(studentDatabase)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
   fetchData();
  }, );
  const filteredstudents =
    data===[]?null:searchField.toString().trim() === ""
      ? data
      : data.filter((student) => {
          // console.log(student.name);
          return (
            student.name
              .toLowerCase()
              .includes(searchField.toString().toLowerCase().trim()) ||
            student.id.startsWith(searchField.toString().trim())
          );
        });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchStudents() {
    return (
      <Box m={3}>
        <Table studData={filteredstudents} />
      </Box>
    );
  }

  const handleOnFocus = () => {
    setFocus(16);
  };

  const handleOnBlur = () => {
    setFocus(3);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box py={3}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box marginTop={4} marginLeft={3}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
              elevation={focus}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, width: 400 }}
                type="search"
                placeholder="Search Student Name"
                onChange={handleChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
              />
            </Paper>
          </Box>
          <AddStudent />
        </Box>
        {searchStudents()}
      </Box>
    </ThemeProvider>
  );
};

export default SearchBar;
