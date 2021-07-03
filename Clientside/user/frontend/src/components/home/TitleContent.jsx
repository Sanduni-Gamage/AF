import React from "react";
import { Link } from "react-router-dom";


const TitleContent = () => {
	return (
		<section className="text-content">
			<h1>International Conference on Application Frameworks - 2021</h1>
			<p
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
			>
				ICAF 2021– International Conference on Application Frameworks 2021 is a conference management tool which developed in order to the organizing of academic conference on application frameworks. This tool will intend to manage all the academic related activities that will be presented in the conference.
			</p>
			<div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
			>
				<Link to="/auth/login" className="gradient-cta">
					Join Now
				</Link>
			</div>
		</section>
	);
};

export default TitleContent;
