import React from "react";
import { motion } from "framer-motion";

import TitleContent from "../components/home/TitleContent";
import SpeakerContent from "../components/home/SpeakerContent";
import Countdown from "../components/home/Countdown";
import Footer from "../components/footer/Footer";
import Vist from "../components/home/VisitPage";

import "./styles/Home.css";
import LandingImg from "url:../../src/assets/images/a1.jpg";


const Home = () => {
	document.title = "International Conference on Application Frameworks | 2021";

	return (
		<>
			<div
				className="home-content"
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				
				<div className="banner-container">
					<img src={LandingImg} alt="landing-image" />
				</div>
				
				<TitleContent />
				<Countdown />
				<SpeakerContent />
				<Vist />
				
				
			</div>
			<Footer />
		</>
	);
};

export default Home;
