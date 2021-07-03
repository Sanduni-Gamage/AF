import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const UserItemCard = ({ publication }) => {
	return (
		<div className="item-container">
		<div className="item-card">
			<div className="item-text-content">
				<h2>Topic : {publication.topic}</h2>
				<p>
					{publication.dueDate
						? `Due Time - ${new Date(
								publication.dueDate
						  ).toDateString()} - ${new Date(
								publication.dueDate
						  ).toLocaleTimeString()}`
						: ` ${!publication.isPaid ? "Not Paid" : "Paid"}`}
				</p>
				<p>
					{" "}
					<span
						className={
							publication.isApproved === "rejected"
								? "red"
								: publication.isApproved === "approved"
								? "green"
								: "blue"
						}
					>
						{publication.isApproved}
					</span>
				</p>
				<center>
				<p className="light">
					Submitted on : {new Date(publication.createdAt).toDateString()}
				</p>
				</center>
			</div>
			</div>
			<div className="item-action-content">
				{!publication.dueDate &&
					publication.isApproved === "approved" &&
					!publication.isPaid && (
						<Link className="pay" to={`publication/pay/${publication._id}`}>
							Pay
						</Link>
				)}
				<Link className="download"
					to={{
						pathname: publication.src,
					}}
					target="blank"
				>
					<center>Download <FaDownload/></center>
				</Link>
			</div>
		
		</div>
	);
};

export default UserItemCard;
