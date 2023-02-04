import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Pricing from "../components/Pricing";
import Work2 from "../components/work2";


const Project=()=>{
	return (
		<div>
			<NavBar />
			<Hero2 heading="PROJECTS." text="Some of my most recent works."/>
			<Work2 />
			<Pricing />
			<Footer />
		</div>
		);
} 

export default Project;