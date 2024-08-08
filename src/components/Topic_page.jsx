import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ArticleCards from "./Articles_cards";
import { getArticles } from "../utils/api";
import Spinner from "react-bootstrap/Spinner";
import Box from "@mui/material/Box";

const TopicPage = ({ articles, setArticles, isLoading, setIsLoading }) => {
	const { topic } = useParams();

	useEffect(() => {
		setIsLoading(true);
        const params = { topic };

		getArticles(params).then((articles) => {
			setArticles(articles);
			setIsLoading(false);
		});
	}, [topic]);

	if (isLoading) {
		return (
			<div className="loading-container">
				<Spinner animation="border" />
				<p>Loading Articles...</p>
			</div>
		);
	}

	return (
		<div>
			<h1>Articles on {topic}</h1>
			<ArticleCards
				article={articles}
				articles={articles}
				key={articles.article_id}
			/>
		</div>
	);
};

export default TopicPage;
