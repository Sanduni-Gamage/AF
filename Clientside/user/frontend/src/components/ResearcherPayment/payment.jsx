import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCcVisa,FaCcAmex,FaCcMastercard,FaLandmark,FaEnvelope,FaPhoneSquareAlt } from "react-icons/fa";
import "../../pages/styles/payment.css";
import { BASE_URL } from "../../config/config";
import { getUserToken } from "../../auth/userAuth";


const payment = () => {

	const [CardDetails, setCardDetails] = useState("");
	const { id } = useParams();
	const [Researcher, setResearcher] = useState("")

	useEffect( async() => {
		const res = await fetch(`${BASE_URL}/researcher/my`, {
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
		const data = await res.json();
		setResearcher(data);
	}, [])

	
	const paymenthandle = async (e) => {
		e.preventDefault();
		
		const res = await fetch(`${BASE_URL}/publication/pay/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				authToken: getUserToken(),
			},
		});
		if (res.ok) {
			toast.success("payment successful");
		}
	};
	console.log(Researcher);

	return (
		<div>
			<center>
			<form className="login-form" onSubmit={(e) => paymenthandle(e)}>
				<h2 className="h1">Research Publication Payment</h2>
				<div className="fee">
					<h4>Submission Fee - 10 $</h4>
				</div>
				<br />
				<div
					className="user-credentials"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
				<div className="name-info">
						<div className="first-name">
							<label htmlFor="card-number">Card Number <FaCcVisa className="icon"/><FaCcMastercard/><FaCcAmex/></label>
							<input
								type="text"
								name="card-number"
								id="card-number"
								maxLength="16"
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
						type="submit"
						className="gradient-cta"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
						>
								Pay
						</button>
					<br />
					
						
					
				</div>
			</form>
			</center>
			<ToastContainer position="top-center" />
		</div>
	);
};

export default payment;