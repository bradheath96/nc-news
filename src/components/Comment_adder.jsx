import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
import { useState, useContext } from "react";
import { postComment } from "../utils/api";
import { UserContext } from "./User_Context";

const CommentAdder = ({ setComments, article_id }) => {
	const { user } = useContext(UserContext);
	const [newComment, setNewComment] = useState("");
	const [err, setErr] = useState("");

	const handleChange = (event) => {
		setNewComment(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (newComment === "") {
			setErr("Please enter a comment.");
			return;
		}

		setErr("");

		const postBody = {
			username: user,
			body: newComment,
		};

		postComment(article_id, postBody).then((newCommentFromApi) => {
			setNewComment("");
			setComments((comments) => {
				return [newCommentFromApi, ...comments];
			});
		});
	};

	return (
		<Box
			component="form"
			sx={{ "& .MuiTextField-root": { m: 1, width: "99%" } }}
			noValidate
			autoComplete="off"
			onSubmit={handleSubmit}>
			{err && (
				<Alert severity="error" sc={{ m: 1 }}>
					{err}
				</Alert>
			)}
			<div>
				<TextField
					id="filled-multiline-static"
					label="Comment"
					multiline
					rows={4}
					variant="filled"
					value={newComment}
					onChange={handleChange}
				/>
			</div>
			<Button variant="contained" type="submit" endIcon={<SendIcon />}>
				Comment
			</Button>
		</Box>
	);
};

export default CommentAdder;
