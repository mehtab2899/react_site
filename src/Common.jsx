import React from "react";
import { NavLink } from "react-router-dom";

export default function Common(props) {
	return (
		<React.Fragment>
			<div className="container">
				<div className="row mt-5 pt-5">
					<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<h1>
							{props.heading}
							<a href="https://mehtabmultani.ml" className="custom_a">
								<span className="d-block ">TechGuy</span>
							</a>
						</h1>
						<p className="custom_p">Developer | DevOps | Programmer</p>
						<NavLink to={props.link}>
							<button className="btn btn-outline-info my-3">
								{props.button}
							</button>
						</NavLink>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-12">
						<img
							src={props.img}
							alt="image"
							className="rounded img-fluid animated"
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
