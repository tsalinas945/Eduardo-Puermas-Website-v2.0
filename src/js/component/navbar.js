import React from "react";
import { Link } from "react-router-dom";
import { Projects } from "../views/projects";

export const Navbar = () => {
	return (
		<div clasName="navbar-container">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="website-logo nav-item">
					<Link to={"/"} className="" href="">
						<img className="website-logo-icon" src="https://i.imgur.com/uZlJ0ZH.png" />
					</Link>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="true"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to={"/about"} className="nav-link" href="">
								About Me
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/skills"} className="nav-link" href="">
								Skills
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/projects"} className="nav-link" href="">
								Projects
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/contact"} className="nav-link" href="">
								Contact Me
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
