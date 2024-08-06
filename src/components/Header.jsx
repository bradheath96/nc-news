import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const capitaliseFirstLetter = (string) => {
	return string[0].toUpperCase() + string.slice(1)
}

const Header = () => {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then((topics) => {
			setTopics(topics);
		});
	}, []);
	
	return (
		<Navbar>
			<Navbar.Brand as={Link} to="/home">
				NC News
			</Navbar.Brand>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav>
					<Nav.Link as={Link} to="/home">
						Home
					</Nav.Link>
					<NavDropdown title="Topics" id="collapsible-nav-dropdown">
						{topics.map((topic) => (
							<NavDropdown.Item
								as={Link}
								to={`/topics/${topic.slug}`}
								key={topic.slug}>
								{capitaliseFirstLetter(topic.slug)}
							</NavDropdown.Item>
						))}
						<NavDropdown.Divider />
						<NavDropdown.Item as={Link} to="/topics">
							All Topics
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link as={Link} to="/profile">
						Profile
					</Nav.Link>
					<Nav.Link as={Link} to="/profile">
						Users
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
