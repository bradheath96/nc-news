import ArticleCards from "./Articles_cards";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";

const Home = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
        getArticles().then((response) => {
			setArticles(response); 
		});
    }, []);
    
	return (
		<div>
			<h1>Latest News:</h1>
			<ArticleCards articles={articles} />
		</div>
	);
};

export default Home;
