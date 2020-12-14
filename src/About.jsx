import React from "react";
import img2 from "../src/images/2.jpg";
import Common from "./Common";

export default function About() {
	return (
		<React.Fragment>
			<Common
				heading="Welcome to About page"
				link="/contact"
				button="Contact Us"
				img={img2}
			/>
		</React.Fragment>
	);
}
