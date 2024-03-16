import React from 'react';
import './App.css';
import {Header} from "./components/includes/header/Header";
import {Footer} from "./components/includes/footer/Footer";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className="container-fluid App">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
        ;
}

export default App;
