import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
	return (
		<Router basename={process.env.PUBLIC_URL + "/"}>
			<Navbar></Navbar>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/Home" component={Home}></Route>
				<Route exact path="/Menu" component={Menu}></Route>
				<Route exact path="/Contact" component={Contact}></Route>
			</Switch>
			<Footer></Footer>
		</Router>
	);
};

export default App;
