import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/home";
import "bootstrap/scss/bootstrap.scss";

const App = () => {
	return (
		<Router>
			<Route exact path="/" component={Home} />
		</Router>
	);
};

export default hot(App);
