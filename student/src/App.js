import { useState, useEffect } from "react";

import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import View from "./components/View";
import Update from "./components/Update";

import Container from "@mui/material/Container";

// import studentDatabase from "./data/studentDatabase.json";

function App() {
  // implement a loader here
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    setTimeout(() => setLoading(false), 3000);
    // setLoading(false);
  }, [loading]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/students");
      // console.log(response)
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
      // console.log(studentDatabase)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Router>
      <div style={{ minHeight: "100vh" }} className="App">
        <div>
          <Navbar />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Container maxWidth="xl">
                  <SearchBar studentDetails={data} />
                </Container>
              }
            />
            <Route path="/view" element={<View />} />
            <Route path="/login" element={<div></div>} />
            <Route path="/update" element={<Update />} />
            <Route path="/error" element={<div></div>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
