import React from "react";
import Common from "./Common";
import img1 from "../src/images/1.jpg";

export default function Home() {
	return (
		<React.Fragment>
			<Common
				heading="Grow your business with"
				link="/service"
				button="Get Started"
				img={img1}
			/>
		</React.Fragment>
	);
}
