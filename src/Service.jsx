import React from "react";
import SerData from "./SerData";
import Card from "./Card";

export default function Service() {
	return (
		<>
			<div className="container">
				<h1 className="text-center mt-5">Our Services</h1>
				<div className="row gy-5 py-5">
					{SerData.map((val, ind) => {
						return <Card key={ind} img={val.img} title={val.title} />;
					})}
				</div>
			</div>
		</>
	);
}
