import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import View from "./components/View";
import Update from "./components/Update";
import Delete from "./components/Delete";

import Container from "@mui/material/Container";

import studentDatabase from "./data/studentDatabase.json";

function App() {
  // implement a loader here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [loading]);

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div>
        <Navbar />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
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
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
