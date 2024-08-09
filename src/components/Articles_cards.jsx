import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { useState, useEffect } from "react";
import { getArticleComments } from "../utils/api";
import { dateConverter } from "../utils/functions";

const ArticleCards = ({ article, loading, setLoading }) => {
	const [comments, setComments] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		
		getArticleComments(article.article_id).then((comments) => {
			setComments(comments.comments)
			
		});
	}, [article.article_id]);

	const handleCardClick = () => {
		navigate(`/articles/${article.article_id}`);
	};

	const handleTopicClick = () => {
		navigate(`/topics/${article.topic}`);
	};

	return (
		<div>
			<Card
				sx={{
					minWidth: 435,
					maxWidth: 435,
					minHeight: 350,
					maxHeight: 350,
					position: "relative",
				}}
				key={article.article_id}
				className="article-cards">
				<CardActionArea onClick={handleCardClick}>
					<CardMedia
						component="img"
						height="150"
						image={article.article_img_url}
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={{
								position: "absolute",
								top: 197,
								paddingRight: 1,
							}}>
							{article.title}
						</Typography>
					</CardContent>
					<CardContent
						sx={{
							position: "absolute",
							top: 280,
						}}>
						<Typography
							variant="body2"
							colour="text.secondary"
							style={{ whiteSpace: "pre-wrap" }}>
							{article.author}
						</Typography>
						<Typography
							variant="body2"
							colour="text.secondary"
							style={{ whiteSpace: "pre-wrap" }}>
							{dateConverter(article.created_at)}
						</Typography>
					</CardContent>
					<CardContent
						sx={{
							display: "flex",
							position: "absolute",
							top: 290,
							right: 1,
						}}>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								marginRight: 8,
							}}>
							<ThumbUpAltOutlinedIcon style={{ marginRight: 4 }} />
							<Typography variant="body2" colour="text.secondary">
								{article.votes}
							</Typography>
						</div>
						<div style={{ display: "flex", alignItems: "center " }}>
							<MessageOutlinedIcon style={{ marginRight: 4 }} />
							<Typography variant="body2" colour="text.secondary">
								{loading ? "Loading..." : comments.length}
							</Typography>
						</div>
					</CardContent>
				</CardActionArea>
				<Chip
					label={article.topic}
					onClick={handleTopicClick}
					id="topicName"
					sx={{ position: "absolute", top: 160, left: "4%" }}
				/>
			</Card>
		</div>
	);
};

export default ArticleCards;
