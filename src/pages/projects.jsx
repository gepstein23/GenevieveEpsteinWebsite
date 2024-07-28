import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";
import VmwareProjects from "../components/projects/vmwareProjects";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Passion Projects
						</div>

						
						<div className="projects-list">
							<AllProjects />
						</div>

						<div className="title projects-title">
							VMware Contributions
						</div>

						<div className="subtitle projects-subtitle">
							Below are several notable Cloud Director projects at VMware that I held significant/leading roles in developing & designing over the years.
						</div>

						<div className="projects-list">
							<VmwareProjects />
						</div>

						<div className="title projects-title">
							FanDuel Contributions
						</div>
						<div className="subtitle projects-subtitle">
							Catching Fraudsters in Progress ... 🤫
						</div>

					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
