import React from "react";

export default function Card(props) {
	return (
		<>
			<div className="col-lg-4 col-md-4 col-sm-12 col-12">
				<div className="card">
					<img src={props.img} className="card-img-top" alt="images" />
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
						<a href="#" className="btn btn-info">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
