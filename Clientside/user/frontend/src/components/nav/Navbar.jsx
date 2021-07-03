import React, { useState, useEffect, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { IoNotificationsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "url:../../assets/images/backgroung.gif";
import { deleteUserAuth, getUserType } from "../../auth/userAuth";
import { RegisterDataContext } from "../../context/RegisterFormContext";
import NotificationList from "../notification/NotificationList";

import "../../pages/styles/Notification.css";
import "../../pages/styles/Navbar.css"

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);
	const { isLogin, setIsLogin } = useContext(RegisterDataContext);
	const [notificationTray, setNotificationTray] = useState("");

	return (
		<header
			initial={{ y: -30, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "tween", duration: 0.5, delay: 0.1 }}
		>
			
			<Link to="/">
				<img src={logo} alt="nav-logo" className="nav-logo"  />
				<center><h1>ICAF</h1></center>
			</Link>
			<nav id={isMobile ? "menu-open" : ""} onClick={() => setIsMobile(false)} className="navbar-container">
				{!isLogin ? (
					<a><Link to="/">Home</Link></a>
				) : (
					<a><Link to={`/auth/user/${getUserType()}/dashboard`}>Dashboard</Link></a>
				)}
				<a><Link to="/workshops" >Workshops</Link></a>
				<a><Link to="/publications">Researches</Link></a>
				<a><Link to="/blogs">Notices</Link></a>
				<a><Link to="/downloads">Downloads</Link></a>
			</nav>
			<div
				className="nav-cta"
				id={isMobile ? "menu-open" : ""}
				onClick={() => setIsMobile(false)}
			>
				{!isLogin ? (
					<div className="nav-cta" id={isMobile ? "menu-open-cta" : ""}>
						<Link to="/auth/login">Login</Link>
						<Link to="/auth/register" className="active">
							Register
						</Link>
						
					</div>
				) : (
					<div className="login-cta">
						<IoNotificationsSharp
							className="notification"
							onClick={() => {
								!notificationTray
									? setNotificationTray("open")
									: setNotificationTray("");
							}}
						/>
						<NotificationList className="active" />
						<Link
							className="active"
							to="/"
							onClick={() => {
								deleteUserAuth();
								setIsLogin(false);
							}}
						>
							Logout
						</Link>
					</div>
				)}
			</div>
			<button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
				{isMobile ? <IoMdClose /> : <CgMenuRight />}
			</button>
			
		</header>
	);
};

export default Navbar;
