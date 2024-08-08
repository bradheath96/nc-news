import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import { UserContext } from "./components/User_Context";

function App() {
	const { user, setUser } = useContext(UserContext);
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/*" element={<Container />} />
			</Routes>
		</div>
	);
}

export default App;
