import * as React from "react";
import ArticleCards from "./Articles_cards";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import Spinner from "react-bootstrap/Spinner";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Home = ({ articles, setArticles, loading, setLoading }) => {
	const [sortBy, setSortBy] = useState("");
	const [orderBy, setOrderBy] = useState("");

	const handleSortByChange = (event) => {
		setSortBy(event.target.value);
	};

	const handleOrderChange = (event) => {
		setOrderBy(event.target.value);
	};

	const getSortByValue = (sortBy) => {
		switch (sortBy) {
			case "Date":
				return "created_at";
			case "Votes":
				return "votes";
			case "Comment Count":
				return "comment_count";
			default:
				return "";
		}
	};

	const getOrderValue = (orderBy) => {
		switch (orderBy) {
			case "Ascending ↑":
				return "asc";
			case "Descending ↓":
				return "desc";
			default:
				return "";
		}
	};

	useEffect(() => {
		let params = {};

		if (sortBy && orderBy) {
			const sortByValue = getSortByValue(sortBy);
			const orderValue = getOrderValue(orderBy);
			params = {
				sorted_by: sortByValue,
				order: orderValue,
			};
		}
		setLoading(true);

		getArticles(params)
			.then((articles) => {
				setArticles(articles);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [sortBy, orderBy]);

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
			<h1 className="title">Latest News</h1>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 2,
				}}>
				<Box
					sx={{
						minWidth: 400,
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-end",
						margin: 2,
						width: "100%",
					}}>
					<FormControl sx={{ minWidth: 150, marginRight: 2 }}>
						<InputLabel id="sort-by-label">Sort By</InputLabel>
						<Select
							labelId="sort-by-label"
							id="sort-by-select"
							value={sortBy}
							label="Sort By"
							onChange={handleSortByChange}>
							<MenuItem value="Date">Date</MenuItem>
							<MenuItem value="Votes">Votes</MenuItem>
							<MenuItem value="Comment Count">Comment Count</MenuItem>
						</Select>
					</FormControl>
					<FormControl sx={{ minWidth: 150, marginRight: 2 }}>
						<InputLabel id="order-by-label">Order</InputLabel>
						<Select
							labelId="order-by-label"
							id="order-by-select"
							value={orderBy}
							label="Order"
							onChange={handleOrderChange}>
							<MenuItem value="Ascending ↑">Ascending ↑</MenuItem>
							<MenuItem value="Descending ↓">Descending ↓</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					justifyContent: "space-around",
					alignContent: "space-around",
					gap: 2,
				}}>
				{articles.map((article) => (
					<ArticleCards
						article={article}
						loading={loading}
						setLoading={setLoading}
						key={article.article_id}
					/>
				))}
			</Box>
		</div>
	);
};

export default Home;
