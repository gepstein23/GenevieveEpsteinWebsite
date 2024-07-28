import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Education = () => {
	return (
		<div className="works">
			<Card
				icon={faBook}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./nu.png"
								alt="works"
								className="work-image"
							/>
							<div className="work-title">Northeastern University</div>
							<div className="work-subtitle">
                                B.Sc., Computer Science, Minor in Music
							</div>
							<div className="work-duration">2017 - 2021</div>
						</div>
						<div className="work">
							<img
								src="./lhs.png"
								alt="VMware by Broadcom"
								className="work-image"
							/>
							<div className="work-title">Layton High School</div>
							<div className="work-subtitle">
							</div>
							<div className="work-duration">Grad. 2017</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
