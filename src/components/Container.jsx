import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Home from "./home";
import ArticlePage from "./Article_page";
import Login from "./Login";
import { UserContext } from "../components/User_Context";

const Container = () => {
	const { user, setUser } = useContext(UserContext);
	return (
		<div>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/articles/:article_id" element={<ArticlePage />} />
			</Routes>
		</div>
	);
};

export default Container;
