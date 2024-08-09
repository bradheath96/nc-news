import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Home from "./home";
import ArticlePage from "./Article_page";
import Login from "./Login";
import { UserContext } from "../components/User_Context";
import TopicPage from "./Topic_page";
import AllTopicsPage from "./All_topics_page";

const Container = ({ isLoading, setIsLoading, topics, setTopics }) => {
	const { user, setUser } = useContext(UserContext);
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							articles={articles}
							setArticles={setArticles}
							isLoading={isLoading}
							setLoading={setIsLoading}
						/>
					}
				/>
				<Route
					path="/home"
					element={
						<Home
							articles={articles}
							setArticles={setArticles}
							loading={isLoading}
							setLoading={setIsLoading}
						/>
					}
				/>
				<Route
					path="/articles/:article_id"
					element={
						<ArticlePage
							loading={loading}
							setLoading={setLoading}
							user={user}
						/>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route
					path="/topics/:topic"
					element={
						<TopicPage
							topics={topics}
							articles={articles}
							setArticles={setArticles}
							isLoading={isLoading}
							setLoading={setLoading}
						/>
					}
				/>
			</Routes>
		</div>
	);
};

export default Container;
