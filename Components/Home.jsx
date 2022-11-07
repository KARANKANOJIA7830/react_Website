import React from "react";
import { Route, Routes } from "react-router-dom";
import web from "../src/images/img4.jpg";
const Home = () => {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                <h1>Grow your business with <strong className="brand-name">Kanojia</strong></h1>
                                <h2 className="my-3">
                                    We are the team of talented developer making a websites
                                </h2>
                                <div className="mt-3">
                                    <a href="" className="btn-get-started">Get started</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={web} className="img-fluid animated" alt="home img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Home;

{/* <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            
                        </div>
                    </div>
                </div> */}