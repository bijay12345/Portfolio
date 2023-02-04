import "./work.css";
import React from "react";
import pro1 from "../assets/project1.png";
import {NavLink} from "react-router-dom";

const Work = (props) =>{
	return (
	
		<div className="project-card">
			<img src={props.imgSrc} alt="project-img" />
			<h2 className="project-title">{props.title}</h2>
			<div className="pro-details">
				<p>{props.text}</p>
				<div className="pro-btns">
					<NavLink to="{props.view}" className="btn">View</NavLink>
					<NavLink to="url.com" className="btn">Source</NavLink>				
				</div>
			</div>
		</div>	
)}


export default Work;