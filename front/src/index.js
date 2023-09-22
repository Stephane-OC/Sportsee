import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./assets/components/Header/Header";
import SideBar from "./assets/components/SideBar/SideBar";
import FrontPage from "./assets/pages/FrontPage";
import Error from "./assets/pages/PageError";

function RedirectToUser12() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/user/12');
  }, [navigate]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <SideBar/>
      <Routes>
        <Route exact path="/user/:id" element={<FrontPage/>}/>
        <Route path="/error" element={<Error/>}/>
        <Route path="/" element={<RedirectToUser12 />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
