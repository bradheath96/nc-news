import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle } from "../utils/api";
import Image from "react-bootstrap/Image";
import { getArticles } from "../utils/api";
import Spinner from "react-bootstrap/Spinner";
import { dateConverter } from "../utils/functions";


const ArticlePage = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getArticle(article_id).then((article) => {
			setArticle(article);
			setLoading(false);
		});
	}, [article_id]);

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
			<h1>{article.title}</h1>
			<h4>Written by: {article.author}</h4>
			<h6>Created at: {dateConverter(article.created_at)}</h6>
			<Image
				src={article.article_img_url}
				style={{ maxWidth: "100%", height: "auto" }}
				alt={article.title}
			/>
			<p>{article.body}</p>
			<p>Votes: {article.votes}</p>
			<h4>Comments: {article.comment_count}</h4>
		</div>
	);
};

export default ArticlePage;
