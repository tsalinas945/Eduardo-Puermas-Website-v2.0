import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
	return (
		<div className="home-container">
			<p>{"Some text in home"}</p>
		</div>
	);
};
