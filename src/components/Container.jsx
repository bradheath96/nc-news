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
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route
					path="/articles/:article_id"
					element={
						<ArticlePage
							isLoading={isLoading}
							setIsLoading={setIsLoading}
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
							setIsLoading={setIsLoading}
						/>
					}
				/>
			</Routes>
		</div>
	);
};

export default Container;
