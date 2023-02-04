import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer"
import Hero2 from "../components/Hero2"
import AboutContent from "../components/AboutContent";

const About=()=>{
	return (
		<div>
			<NavBar />
			<Hero2 heading="ABOUT" text="I'm a friendly Web Developer."/>
			<AboutContent />
			<Footer/>
		</div>
		)
} 

export default About;