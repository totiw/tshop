import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = (props) => {
    console.log(props)
    return (
        <>
            <Navbar/>
            <Hero/>
        </>
    )
}

export default Home;