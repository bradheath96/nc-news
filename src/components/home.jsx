import ArticleCards from "./Articles_cards";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import Spinner from "react-bootstrap/Spinner";

const Home = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getArticles().then((response) => {
			setArticles(response);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return (
			<div className="loading-container">
				<Spinner animation="border" />
				<p>Loading Articles...</p>
			</div>
		);
	}
	return (
		<div>
			<h1>Latest News:</h1>
			<ArticleCards articles={articles} />
		</div>
	);
};

export default Home;
