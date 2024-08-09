import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import { UserContext } from "./components/User_Context";

function App() {
	const { user } = useContext(UserContext);
	const [topics, setTopics] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	return (
		<div>
			<Header topics={topics} setTopics={setTopics} />
			<Routes>
				<Route
					path="/*"
					element={
						<Container
							isLoading={isLoading}
							setIsLoading={setIsLoading}
							topics={topics}
							setTopics={setTopics}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
