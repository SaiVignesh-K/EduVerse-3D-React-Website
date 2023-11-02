import { useState } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import App from "./App"
import { SharedStateProvider } from './sharedState';
import { useSharedState } from './sharedState';
import { DashBoard } from "./DashBoard";
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';
import { Signup } from "./Signup";
import { Login } from "./Login";


function Overlay() {
  const { text, desc } = useSharedState();

  return (
    <>
      {/* <Login/> */}
      <DashBoard/>
      <div className="dot" />
      <p className="hovertext">{text}</p>
      <p className="desc" id="desc">
      💡{desc}
      </p>
      <App />
    </>
  );
}


createRoot(document.getElementById("root")).render(
  <SharedStateProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<Overlay/>}/>
      </Routes>
    </BrowserRouter>
    {/* <Overlay /> */}
   
  </SharedStateProvider>
)
