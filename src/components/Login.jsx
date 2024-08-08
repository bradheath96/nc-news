import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect, useContext } from "react";
import { getUsers } from "../utils/api";
import { UserContext } from "./User_Context";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Spinner from "react-bootstrap/Spinner";

const Login = () => {
	const { user, setUser } = useContext(UserContext);
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [selectedUser, setSelectedUser] = useState("");

	useEffect(() => {
		getUsers().then((users) => {
			setUsers(users);
			setLoading(false);
		});
	}, []);

	const handleChange = (event) => {
		const selectedUser = event.target.value;
		setSelectedUser(selectedUser);
		setUser(selectedUser);
		setIsLoggedIn(true);
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
			<h1>Login</h1>
			{isLoggedIn ? (
				<Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
					Successfully logged in
				</Alert>
			) : (
				<div>
					<p>Select a user</p>
					<Box sx={{ maxWidth: 250 }}>
						<FormControl fullWidth>
							<InputLabel id="username-select-label">Select</InputLabel>
							<Select
								labelId="username-select-label"
								id="username-select"
								value={selectedUser}
								label="User"
								onChange={handleChange}>
								{users.map((user) => (
									<MenuItem value={user.username} key={user.username}>
										{user.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>
				</div>
			)}
		</div>
	);
};

export default Login;
