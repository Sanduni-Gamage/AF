import React from "react";




const Timeline = () => {
	return (
		<div className="timeline-content-container">
			<h1>International Conference on Application Frameworks 2021</h1>

			<div
				className="timeline"
				initial={{ y: 200, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 1 }}
			>
				<ul>
					
				</ul>
			</div>
		</div>
	);
};

export default Timeline;
