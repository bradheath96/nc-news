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
import { Button } from "react-bootstrap";

const Login = () => {
	const { user, setUser } = useContext(UserContext);
	const [users, setUsers] = useState([]);
	const [usersLoading, setUsersLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		getUsers().then((users) => {
			setUsers(users);
			setUsersLoading(false);
		});
	}, []);

	function handleClick(event) {
		event.preventDefault();
		setUser(event.target.innerText);
		setIsLoggedIn(true);
	}

	function handleSignOutClick(event) {
		setUser("");
		setIsLoggedIn(false);
	}

	return (
		<div>
			<h1>Login</h1>
			{user ? (
				<div>
					<Alert
						severity="success"
						style={{ marginBottom: 16, maxWidth: 300 }}>
						Successfully logged in!
					</Alert>
					<Button variant="outlines" onClick={handleSignOutClick}>
						Sign Out
					</Button>
				</div>
			) : (
				<div>
					<p>Select a user</p>

					<Box sx={{ minWidth: 120 }}>
						<FormControl sx={{ maxWidth: 500 }} fullWidth>
							<InputLabel id="username-select-label">Select</InputLabel>
							<Select
								labelId="username-select-label"
								id="username-select"
								label="user"
								onClick={handleClick}>
								{usersLoading ? (
									<Spinner animation="border" />
								) : (
									users.map((userData) => {
										return (
											<MenuItem value={user.username} key={userData.username}>
											{userData.username}
											</MenuItem>
										);
									})
								)}
							</Select>
						</FormControl>
					</Box>
				</div>
			)}
		</div>
	);
};

export default Login;
