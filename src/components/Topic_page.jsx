import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ArticleCards from "./Articles_cards";
import { getArticles } from "../utils/api";
import Spinner from "react-bootstrap/Spinner";
import Box from "@mui/material/Box";

const TopicPage = ({ articles, setArticles, loading, setLoading }) => {
	const { topic } = useParams();

	useEffect(() => {
		setLoading(true);
		const params = { topic };

		getArticles(params).then((articles) => {
			setArticles(articles);
			setLoading(false);
		});
	}, [topic]);


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
			<h1>Articles on {topic[0].toUpperCase() + topic.slice(1)}</h1>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					justifyContent: "space-around",
					alignContent: "space-around",
					gap: 2,
				}}>
				{articles.map((article) => (
					<ArticleCards
						article={article}
						loading={loading}
						setLoading={setLoading}
						key={article.article_id}
					/>
				))}
			</Box>
		</div>
	);
};

export default TopicPage;
