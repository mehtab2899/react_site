import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Footer from "./Footer";
import Home from "./Home";
import Menu from "./Menu";
import Service from "./Service";

const App = () => {
	return (
		<React.Fragment>
			<Menu />
			<Switch>
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/" component={Home} />
				<Route exact path="/service" component={Service} />
				<Route component={Error} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
};

export default App;
