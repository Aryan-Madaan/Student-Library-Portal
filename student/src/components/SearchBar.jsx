import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import React, { useState } from 'react';
import Table from "./Table";
import AddStudent from "./AddStudent";




const SearchBar = ({studentDetails}) => {

  const [searchField, setSearchField] = useState("");

  const filteredstudents = searchField.toString().trim()===""?studentDetails.students:studentDetails.students.filter(
    student => {
      console.log(student.name)
      return (
        student
        .name.toLowerCase()
        .includes(searchField.toString().toLowerCase().trim())||student
        .id
        .startsWith(searchField.toString().trim())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchStudents()
  {
    return(
      <Box m={3}>
              <Table studData={filteredstudents}/>
            </Box>
    )
  }

  return (
    <Box py={3}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box marginTop={4} marginLeft={3}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ ml: 1, width: 400 }} type = "search"  placeholder="Search Student Name" onChange = {handleChange}/>
      </Paper>
    </Box>
              <AddStudent />
            </Box>
            {searchStudents()}
          </Box>

  );
};

export default SearchBar;
