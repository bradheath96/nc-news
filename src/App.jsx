import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
