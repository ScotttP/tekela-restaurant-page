import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.scss";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact";
import Food from "./Components/Menu/Food";
import Drink from "./Components/Menu/Drink";

const App = () => {
	return (
		<Router basename={process.env.PUBLIC_URL + "/"}>
			<Navbar></Navbar>

			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/Home" component={Home}></Route>

				<Route exact path="/Food" component={Food}></Route>
				<Route exact path="/Drinks" component={Drink}></Route>

				<Route exact path="/Contact" component={Contact}></Route>
			</Switch>

			<Footer></Footer>
		</Router>
	);
};

export default App;
