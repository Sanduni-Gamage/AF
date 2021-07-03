import React from "react";
import { Link } from "react-router-dom";

const WorkshopPublicationCard = ({ event }) => {
	return (
		<div className="item-container">
		<div className="item-card1">
			<table>
			<tr>
				<h2>{event.topic}</h2>
				</tr>
				<tr>
				<div className="conductor-details">
					<h3 className={!event.dueDate && "grey"}>
						{event.dueDate ? "Conduct" : "Published"} By{" "}
						{event.createdBy.firstName + " " + event.createdBy.lastName}
					</h3>
				</div>
				</tr>
				<tr>
				{event.dueDate ? (
					<p>
						On{" "}
						{new Date(event.dueDate).toDateString() +
							" " +
							new Date(event.dueDate).toLocaleTimeString()}
					</p>
				) : (
					<Link
					className="download1" to={{
							pathname: event.src,
						}}
						target="blank"
					>
						Download
					</Link>
				)}
				</tr>
				</table>
			</div>
		</div>
	);
};

export default WorkshopPublicationCard;
