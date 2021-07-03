import React from "react";
import { FaUserTie } from "react-icons/fa";

import { getUserType } from "../../auth/userAuth";

const ProfileCard = ({ profile }) => {
	return (
		<div
			className="profile-card"
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "tween", duration: 0.8 }}
		>
			<div className="profile-img">
				<FaUserTie className="profile-avatar" />
				<h2>{`${getUserType()}`}</h2>
			</div>
			<div className="profile-details">
				<h2>{'Welcome'}</h2>
				<h3>{` ${profile.firstName} ${
					profile.lastName
				} `}</h3>
				<p>{profile.email}</p>
			</div>
		</div>
	);
};

export default ProfileCard;
