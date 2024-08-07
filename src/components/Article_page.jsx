import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticle, getArticleComments } from "../utils/api";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import { dateConverter } from "../utils/functions";
import CommentCard from "./Comment_cards";


const ArticlePage = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState({});
	const [comments, setComments] = useState([])
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getArticle(article_id).then((article) => {
			setArticle(article);
			
		});
	}, [article_id]);

	useEffect(() => {
		getArticleComments(article_id).then((comments) => {
			setComments(comments.comments)
			setLoading(false);
		})
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
			<h5>Votes: {article.votes}</h5>
			<h5>Comments: {article.comment_count}</h5>
			{comments.map((comment) => {
				return (
					<CommentCard comment={comment} key={comment.comment_id}/>
				)
			})}
		</div>
	);
};

export default ArticlePage;
