import "./hero.css";
import React from "react"
import IntroImage from "../assets/intro-bg.jpg";
import {Link} from "react-router-dom";


const Hero = () =>{
	return (
		<div className="hero">
			<div className="mask">
				<img className="intro-img" src={IntroImage}
				alt="IntroImage"/>
			</div>
			<div className="content">
				<p> I'M A FREELANCER.</p>
				<h1> PYTHON DEVELOPER </h1>
				<div>
			    	<Link to="/Project" className="btn">Projects</Link>
			    	<Link to="/Contact" className="btn btn-light">Contact</Link>
			    </div>
		    </div>
		    
		</div>
		)
}

export default Hero;