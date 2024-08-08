import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getArticle, getArticleComments, patchArticleById } from "../utils/api";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import { dateConverter } from "../utils/functions";
import CommentCard from "./Comment_cards";
import IconButton from "@mui/material/IconButton";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Alert from "@mui/material/Alert";
import CommentAdder from "./Comment_adder";
import { UserContext } from "./User_Context";

const ArticlePage = () => {
	const { article_id } = useParams();
	const { user } = useContext(UserContext);
	const [article, setArticle] = useState({});
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [upVoteClicked, setUpVoteClicked] = useState(false);
	const [upVotes, setUpVotes] = useState(0);
	const [err, setErr] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
		getArticle(article_id).then((article) => {
			setArticle(article);
			setUpVotes(article.votes);
		});
	}, [article_id]);

	useEffect(() => {
		getArticleComments(article_id).then((comments) => {
			setComments(comments.comments);
			setLoading(false);
		});
	}, [article_id]);

	const handleClick = (event) => {
		event.preventDefault();
		if (!upVoteClicked) {
			setUpVoteClicked(true);
			setUpVotes((upVotes) => upVotes + 1);
			const patchBody = { inc_votes: 1 };
			patchArticleById(article_id, patchBody).catch((err) => {
				setUpVoteClicked(false);
				setUpVotes((currentUpvotes) => currentUpvotes - 1);
				setErr("Something went wrong, please try again.");
			});
		} else {
			setUpVoteClicked(false);
			setUpVotes((upVotes) => upVotes - 1);
			const patchBody = { inc_votes: -1 };
			patchArticleById(article_id, patchBody).catch((err) => {
				setUpVoteClicked(true);
				setUpVotes((currentUpvotes) => currentUpvotes + 1);
				setErr("Something went wrong, please try again.");
			});
		}
	};

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
			<h4>Author: {article.author}</h4>
			<h6>Created at: {dateConverter(article.created_at)}</h6>
			<Image
				src={article.article_img_url}
				style={{ maxWidth: "100%", height: "auto" }}
				alt={article.title}
			/>
			<p>{article.body}</p>
			<IconButton onClick={handleClick} aria-label="Votes for this article">
				{upVoteClicked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
				{upVotes}
			</IconButton>
			{err ? (
				<Alert variant="outlined" severity="error">
					Something went wrong. Please try again.
				</Alert>
			) : null}
			<CommentAdder setComments={setComments} article_id={article_id} />
			<h5>Comments: {article.comment_count}</h5>
			{comments.map((comment) => {
				return <CommentCard comment={comment} key={comment.comment_id} user={user} />;
			})}
		</div>
	);
};

export default ArticlePage;
