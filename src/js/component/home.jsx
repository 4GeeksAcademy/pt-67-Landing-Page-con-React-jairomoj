import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Body from "./body";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Body />
			<Footer />
		</div>
	);
};

export default Home;
