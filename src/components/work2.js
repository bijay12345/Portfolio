import "./work.css";
import React from "react";
import pro1 from "../assets/project1.png";
import {NavLink} from "react-router-dom";
import Work from "./Work";
import WorkCardData from "./workcarddata";


const Work2 = () =>{
	return (
	
	<div className="work-container">
		<h1 className="project-heading">Projects</h1>
		<div className="project-container">
			{WorkCardData.map((val,index) =>{
				return(
				<Work
				 key={index} 
				 imgSrc={val.imgSrc}
				 title={val.title}
				 text={val.text}
				 view={val.view}
				 />
				)

			})}
		</div>
	</div>		

)}


export default Work2;