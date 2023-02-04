import "./footer.css";
import React from "react";
import {FaHome,FaPhone,FaMailBulk,FaTwitter,FaFacebook,FaLinkedin} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
						<div>
							<p>Jaduvitta, Milanmore</p>
							<p>India.</p>
						</div>
					</div>
					<div className="phone">
						<h4>
						<FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
						123-123-123-123
						</h4>
					</div>

					<div className="email">
						<h4>
						<FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
						demo@gmail.com
						</h4>
					</div>

				</div>


				<div className="right">
					<h4>About the Company</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>				
					   <div className="social">
					   	<FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
					    <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
					    <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
					   </div>
				</div>
			</div>
		</div>
		)	
}

export default Footer;