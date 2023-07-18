import { useState, useEffect } from "react";

import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ParticlesBG from "./components/ParticlesBG";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import Update from "./components/Update";
import Status from "./components/Status";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import View from "./components/View";

import AddStudentPage from "./components/AddStudentPage";
import Container from "@mui/material/Container";
import axios from "axios";

// import studentDatabase from "./data/studentDatabase.json";

function App() {
  // implement a loader here
  const [auth,setAuth] = useState(true);
  const [accessToken,setAccessToken] = useState(null)

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
    const checkAuth = async ()=>{
      if (accessToken === null) return setAuth(true);
      console.log(accessToken)
      const val = await axios.get(
        `${process.env.REACT_APP_NAME}/hiddencontent`,{
          headers:{
            'Authorization':`JWT ${accessToken}`
          }
        }
      )
      // console.log(val)
      if (val.status===200)
      return setAuth(false);
      else
      return setAuth(true);
      
    }
    checkAuth()
    // console.log(accessToken)
    // console.log(data)
    // setTimeout(() => setLoading(false), 3000);
   
    // setLoading(false);
  }, [accessToken]);

  console.log(auth)
  if(auth)
  {
    return   (<div style={{ minHeight: "100vh" }} className="App">
    <ParticlesBG />
    <div>
      {/* <Navbar />  */}
    </div>
    <Login  setAccessToken={setAccessToken} />;
    </div>
    
    )
  }


  


  // checkAuth()
  return (
    <Router>
      <div style={{ minHeight: "100vh" }} className="App">
        <ParticlesBG />
        <div>
          <Navbar />
        </div>
        {false ? (
          // <Navigate to="/login" />
          <Login  setAccessToken={setAccessToken}/>
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
            {/* <Route path="/login" element={<Login  setAccessToken={setAccessToken}/>} /> */}
            <Route path="/update" element={<Update />} />
            <Route path="/add" element={<AddStudentPage />} />
            <Route path="/status" element={<Status />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
