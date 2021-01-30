import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Food from "./Components/Food";
import Drink from "./Components/Drink";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

const App = () => {
	window.onscroll = () => {
		const navbarContainer = document.getElementById("navbarContainer");
		if (window.pageYOffset >= 65) {
			navbarContainer.classList.add("sticky");
		} else {
			navbarContainer.classList.remove("sticky");
		}
	};
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
