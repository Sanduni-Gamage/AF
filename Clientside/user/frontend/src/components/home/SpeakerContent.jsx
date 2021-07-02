import React, { useEffect, useState } from "react";
import { MdFormatQuote } from "react-icons/md";
import SpeakerCard from "./SpeakerCard";


const SpeakerContent = () => {
	const [speakers, setSpeakers] = useState([]);

	

	return (
		<section className="speaker-content">
			
			<h1> Keynote Speakers</h1>
			<div className="speaker-card-content">
				
			</div>
		</section>
	);
};

export default SpeakerContent;
