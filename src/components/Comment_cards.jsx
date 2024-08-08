import * as React from "react";
import { useState, useContext } from "react";
import { UserContext } from "./User_Context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { deleteComment } from "../utils/api";
import Alert from "@mui/material/Alert";
import { dateConverter } from "../utils/functions";

const CommentCard = ({ comment }) => {
	const { user } = useContext(UserContext);
	const [isDeleted, setIsDeleted] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	
	const handleDeleteClick = (event) => {
		event.preventDefault();
		deleteComment(comment.comment_id).then((response) => {
		});
		setIsDeleted(true);
		setShowAlert(true);
	};
	return (
		<div>
			{showAlert && (
				<Alert
					severity="success"
					onClose={() => setShowAlert(false)}
					style={{ marginBottom: 16, maxWidth: 300 }}>
					Comment has been deleted
				</Alert>
			)}
			{!isDeleted ? (
				<Card sx={{ maxWidth: 275 }}>
					<CardContent>
						<h5>{comment.author}</h5>
						<Typography sx={{ fontSize: 14 }} gutterBottom>
							{comment.body}
						</Typography>
						<small>{dateConverter(comment.created_at)}</small>
						<p>Votes: {comment.votes}</p>
						{user === comment.author ? (
							<Button
								variant="text"
								endIcon={<DeleteIcon />}
								onClick={handleDeleteClick}>
								Delete
							</Button>
						) : null}
					</CardContent>
				</Card>
			) : null}
		</div>
	);
};

export default CommentCard;
