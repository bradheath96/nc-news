import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { dateConverter } from "../utils/functions";

const CommentCard = ({ comment }) => {
	return (
		<Card sx={{ maxWidth: 275 }}>
			<CardContent>
				<h5>{comment.author}</h5>
				<Typography sx={{ fontSize: 14 }} gutterBottom>
					{comment.body}
				</Typography>
				<small>{dateConverter(comment.created_at)}</small>
				<p>Votes: {comment.votes}</p>
			</CardContent>
		</Card>
	);
};

export default CommentCard;
