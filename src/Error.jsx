import React from "react";
import { NavLink } from "react-router-dom";
import img from "../src/images/10.jpg";

export default function Error() {
	const styleImg = {
		width: "500px",
		height: "400px",
	};
	return (
		<>
			<div className="container">
				<h1 className="text-center text-warning py-2">
					404 Error Page Not Found!
				</h1>
				<div className="text-center">
					<img
						src={img}
						alt="image"
						style={styleImg}
						className="rounded img-fluid"
					/>
				</div>
			</div>
		</>
	);
}
