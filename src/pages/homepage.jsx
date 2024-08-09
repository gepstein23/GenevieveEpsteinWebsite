import React from "react";
import { Helmet } from "react-helmet";

import "./styles/homepage.css"; // Assuming you want to keep some basic styling

const MaintenancePage = () => {
	const maintenanceStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		flexDirection: "column",
		textAlign: "center",
		backgroundColor: "#f0f0f0",
	};

	const titleStyle = {
		fontSize: "2rem",
		fontWeight: "bold",
		marginBottom: "1rem",
	};

	const subtitleStyle = {
		fontSize: "1.25rem",
		color: "#555",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>Under Maintenance</title>
				<meta
					name="description"
					content="This page is currently under maintenance."
				/>
			</Helmet>

			<div style={maintenanceStyle}>
				<div style={titleStyle}>We'll be back soon!</div>
				<div style={subtitleStyle}>
					This page is currently under maintenance.
				</div>
			</div>
		</React.Fragment>
	);
};

export default MaintenancePage;
