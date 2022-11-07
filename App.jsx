import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Service from "./Components/Service";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Navbar";
// import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/service" element={<Service />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default App;