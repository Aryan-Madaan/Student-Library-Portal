import { useState, useEffect } from "react";
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

import studentDatabase from "./data/studentDatabase.json";

function App() {
  // implement a loader here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [loading]);

  return (
    <div style={{ backgroundColor: "#111515", minHeight: "100vh" }}>
      <div>
        <Navbar />
      </div>
      {/* Set loading here */}
      {false ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Container maxWidth="xl">
                  <SearchBar studentDetails={studentDatabase} />
                </Container>
              }
            />
            <Route path="/view" element={<View />} />
            <Route path="/login" element={<div></div>} />
            <Route path="/update" element={<Update />} />
            <Route path="/error" element={<div></div>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
