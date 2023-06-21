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
import Status from "./components/Status";

import Container from "@mui/material/Container";
import NewLending from "./components/NewLending";

// import studentDatabase from "./data/studentDatabase.json";

function App() {
  // implement a loader here
  const [loading, setLoading] = useState(true);


  

  // const fetchData = useCallback( async () => {
  //   var [mydata,err,error] = await FetchData();
  //   if(err){
  //     handleError();
  //     console.log(error);
  //   }
  //   else{
  //     setData(mydata);
  //   }
  // });


  
  useEffect(() => {
   
    // console.log(data)
    setTimeout(() => setLoading(false), 3000);
    // setLoading(false);
  }, [loading]);



  return (
    <Router>
      <div style={{ minHeight: "100vh" }} className="App">
        <div>
          <Navbar />
        </div>
        {false ? (
          <Loading />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Container maxWidth="xl">
                  <SearchBar />
                </Container>
              }
            />
            <Route path="/view" element={<View />} />
            <Route path="/login" element={<div></div>} />
            <Route path="/lend" element={<NewLending />} />
            <Route path="/status" element={<Status />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
