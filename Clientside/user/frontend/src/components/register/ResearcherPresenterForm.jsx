import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RegisterDataContext } from "../../context/RegisterFormContext";
import Loading from "../../helpers/Loading";
import { BASE_URL } from "../../config/config";
import { FaFileAlt } from "react-icons/fa";

const PresenterForm = ({ title }) => {
	const { setCurrentStep, material, setMaterial, userData, setUserData } =
		useContext(RegisterDataContext);
	const allowedTypes = [
		"application/pdf",
		"application/vnd.openxmlformats-officedocument.presentationml.presentation",
		"application/vnd.ms-powerpoint",
	];
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const history = useHistory();

	const fileChangeHandler = (e) => {
		const selectedFile = e.target.files[0];

		if (selectedFile && allowedTypes.includes(selectedFile.type)) {
			setFile(selectedFile);
			setMaterial({ ...material, name: selectedFile.name });
			setError("");
		} else {
			setFile(null);
			setError(
				"Select valid type. (only pdf, presentation  files are allowed)"
			);
		}
	};

	const handleMaterial = async () => {
		let materialType;

		if (userData.userType === "researcher") {
			materialType = "publication";
		} else if (userData.userType === "presenter") {
			materialType = "workshop";
		}

		const response = await fetch(`${BASE_URL}/${materialType}/create`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(material),
		});

		if (response.ok) {
			setUserData({});
			setMaterial({});
			toast.success("Your account has been created. Please login to proceed");
		} else {
			toast.error("Sorry, something went wrong.");
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${BASE_URL}/${userData.userType}/create`, {
				method: "POST",
				
				headers: {
					"Content-Type": "application/json",
					
					
					
				},
				body: JSON.stringify(userData),
			});

			const userId = await response.json();
			material.createdBy = userId.id;

			if (response.status === 406) {
				if (userId.message.includes("username")) {
					toast.error("Username already exists");
				} else if (userId.message.includes("email")) {
					toast.error("Email already exists");
				}
			}

			if (response.ok) {
				handleMaterial();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="register-content">
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			{file && <Loading file={file} setFile={setFile} />}
			
			<form
				className="login-form"
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<div
					className="user-credentials"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
					<h2>Sign Up As a {title}</h2>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						placeholder="Your Email address"
						id="email"
						required
						autoComplete="off"
						value={userData.email}
						onChange={(e) =>
							setUserData({ ...userData, email: e.target.value })
						}
					/>
					<label htmlFor="mobile-number">Contact Number</label>
					<input
						type="tel"
						name="mobile-number"
						placeholder="Your Mobile Number"
						id="mobile-number"
						required
						maxLength="10"
						autoComplete="off"
						value={userData.contactNumber}
						onChange={(e) =>
							setUserData({ ...userData, contactNumber: e.target.value })
						}
					/>
					<div className="name-info">
						<div className="first-name">
							<label htmlFor="university">University</label>
							<input
								type="text"
								name="university"
								placeholder="Your University/Institute"
								id="university"
								required
								autoComplete="off"
								value={userData.university}
								onChange={(e) =>
									setUserData({ ...userData, university: e.target.value })
								}
							/>
						</div>
						<div className="last-name">
							<label htmlFor="department">Faculty</label>
							<input
								type="text"
								name="department"
								id="department"
								placeholder="Your Faculty of Study"
								required
								autoComplete="off"
								value={userData.department}
								onChange={(e) =>
									setUserData({ ...userData, department: e.target.value })
								}
							/>
						</div>
					</div>
					<div className="name-info">
						<div className="first-name">
							<label htmlFor="topic">Add a Topic to your Work </label>
							<input
								type="text"
								name="topic"
								id="topic"
								required
								autoComplete="off"
								value={material.topic}
								onChange={(e) =>
									setMaterial({ ...material, topic: e.target.value })
								}
							/>
						</div>
						<div className="last-name">
							<label htmlFor="material">Upload your Documents<FaFileAlt/></label>
							<input
								type="file"
								accept=".pdf, .zip, .rar, .ppt, .pptx"
								name="material"
								id="material"
								required
								autoComplete="off"
								maxLength="3"
								onChange={fileChangeHandler}
							/>
						</div>
					</div>
					{userData.userType === "presenter" && (
						<div className="last-name">
							<label htmlFor="date">Workshop Date and Time</label>
							<input
								type="datetime-local"
								name="date"
								id="date"
								required
								autoComplete="off"
								value={material.dueDate}
								onChange={(e) => {
									setMaterial({ ...material, dueDate: e.target.value });
								}}
							/>
						</div>
					)}
					<div>{error && <div className="error">{error}</div>}</div>
				</div>
				<div className="button-container">
					<button
						className="gradient-cta transparent"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
						onClick={() => setCurrentStep(1)}
					>
						Back
					</button>
					<button
						type="submit"
						className="gradient-cta"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
						onClick={handleRegister}
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default PresenterForm;
