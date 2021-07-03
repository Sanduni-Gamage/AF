import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCcVisa,FaCcAmex,FaCcMastercard,FaLandmark,FaEnvelope,FaPhoneSquareAlt } from "react-icons/fa";
import { RegisterDataContext } from "../../context/RegisterFormContext";
import { BASE_URL } from "../../config/config";


const AttendeeForm = () => {
	const { setCurrentStep, setUserData, userData, payment, setPayment } =
		useContext(RegisterDataContext);
	const history = useHistory();

	const handleRegister = async (e) => {
		e.preventDefault();
		if (payment) {
			delete userData.userType;
			userData.isPaid = true;
		}
		try {
			const response = await fetch(`${BASE_URL}/attendee/create`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			if (response.ok) {
				toast.success("Your account has been created");
				history.push("/auth/login");
			} else {
				toast.error("Sorry, something went wrong");
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
			
			<form
				className="login-form"
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<h2>Attendee Registration</h2>
				<div
					className="user-credentials"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
					<label htmlFor="email">Email <FaEnvelope/></label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="john@example.com"
						required
						autoComplete="off"
						value={userData.email}
						onChange={(e) =>
							setUserData({ ...userData, email: e.target.value })
						}
					/>
					<label htmlFor="mobile-number">Contact Number <FaPhoneSquareAlt/></label>
					<input
						type="tel"
						name="mobile-number"
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
							<label htmlFor="card-number">Card Number <FaCcVisa className="icon"/><FaCcMastercard/><FaCcAmex/></label>
							<input
								type="text"
								name="card-number"
								id="card-number"
								placeholder="1111-2222-3333-4444"
								required
								autoComplete="off"
								value={payment.cardNumber}
								onChange={(e) =>
									setPayment({ ...payment, cardNumber: e.target.value })
								}
							/>
						</div>
						<div className="last-name">
							<label htmlFor="cvc">CVC</label>
							<input
								type="text"
								name="last-name"
								id="last-name"
								placeholder="352"
								required
								autoComplete="off"
								maxLength="3"
								value={payment.cvc}
								onChange={(e) =>
									setPayment({ ...payment, cvc: e.target.value })
								}
							/>
						</div>
					</div>

					<div className="name-info">
						<div className="first-name">
							<label htmlFor="state">State</label>
							<input
								type="text"
								name="state"
								id="state"
								placeholder="NY"
								required
								autoComplete="off"
								value={payment.state}
								onChange={(e) =>
									setPayment({ ...payment, state: e.target.value })
								}
							/>
						</div>
						<div className="last-name">
							<label htmlFor="Address">Address</label>
							<input
								type="text"
								name="Address"
								id="Address"
								placeholder="542 W. 15th Street"
								required
								autoComplete="off"
								maxLength="3"
								value={payment.address}
								onChange={(e) =>
									setPayment({ ...payment, address: e.target.value })
								}
							/>
						</div>
					</div>


					<div className="name-info">
						<div className="first-name">
							<label htmlFor="city">City <FaLandmark/></label>
							<input
								type="text"
								name="city"
								id="city"
								placeholder="New York"
								required
								autoComplete="off"
								value={payment.city}
								onChange={(e) =>
									setPayment({ ...payment, city: e.target.value })
								}
							/>
						</div>
						<div className="last-name">
							<label htmlFor="Zip">Zip</label>
							<input
								type="text"
								name="Zip"
								id="Zip"
								placeholder="10001"
								required
								autoComplete="off"
								maxLength="3"
								value={payment.zip}
								onChange={(e) =>
									setPayment({ ...payment, zip: e.target.value })
								}
							/>
						</div>
					</div>

					<div className="name-info">
						<div className="first-name">
							<label htmlFor="exp-date">Expiration Date</label>
							<input
								type="text"
								name="exp-date"
								id="exp-date"
								required
								autoComplete="off"
								placeholder="12-2024"
								value={payment.expireDate}
								onChange={(e) =>
									setPayment({ ...payment, expireDate: e.target.value })
								}
							/>
						</div>
						<div className="last-name">
							<label htmlFor="amount">Amount</label>
							<input
								type="text"
								name="amount"
								id="amount"
								required
								autoComplete="off"
								maxLength="3"
								value="10 $"
								disabled
								onChange={() => setPayment({ ...payment, amount: 10 })}
							/>
						</div>
					</div>
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

export default AttendeeForm;
