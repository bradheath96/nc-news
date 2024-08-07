import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { commentDateConverter } from "../utils/functions";



const CommentCard = ({ comment }) => {
	return (
		<Card sx={{ maxWidth: 275 }}>
			<CardContent>
				<h5>{comment.author}</h5>
				<Typography sx={{ fontSize: 14 }} gutterBottom>
					{comment.body}
				</Typography>
                <p>{commentDateConverter(comment.created_at)}</p>
                <p>Votes: {comment.votes}</p>
			</CardContent>
		</Card>
	);
};

export default CommentCard;
