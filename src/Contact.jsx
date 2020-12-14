import { data } from "jquery";
import React, { useState } from "react";

export default function Contact() {
	const [data, setData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	});

	const inputEvent = (e) => {
		const { name, value } = e.target;

		setData((preVal) => {
			return {
				...preVal,
				[name]: value,
			};
		});
	};

	const formSubmit = (e) => {
		e.preventDefault();
		alert(`${data.name}, ${data.phone}, ${data.email}, ${data.message}`);
	};

	return (
		<>
			<div className="container">
				<h1 className="text-center mt-4">Contact</h1>
				<div className="row">
					<form className="col-md-6 mx-auto col-10" onSubmit={formSubmit}>
						<div className="mb-3">
							<label for="exampleFormControlInput1" className="form-label">
								Full Name
							</label>
							<input
								type="text"
								className="form-control"
								id="exampleFormControlInput1"
								name="name"
								value={data.name}
								onChange={inputEvent}
								placeholder="Name"
							/>
						</div>
						<div className="mb-3">
							<label for="exampleFormControlInput1" className="form-label">
								Phone
							</label>
							<input
								type="number"
								className="form-control"
								id="exampleFormControlInput1"
								name="phone"
								value={data.phone}
								onChange={inputEvent}
								placeholder="Phone Number"
							/>
						</div>
						<div className="mb-3">
							<label for="exampleFormControlInput1" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleFormControlInput1"
								name="email"
								value={data.email}
								onChange={inputEvent}
								placeholder="name@example.com"
							/>
						</div>
						<div className="mb-3">
							<label for="exampleFormControlTextarea1" className="form-label">
								Message
							</label>
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
								name="message"
								value={data.message}
								onChange={inputEvent}
							></textarea>
						</div>
						<button className="btn btn-outline-secondary">Submit</button>
					</form>
				</div>
			</div>
		</>
	);
}
