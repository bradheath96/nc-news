import { Routes, Route } from "react-router-dom";
import Home from "./home";
import ArticlePage from "./Article_page";

const Container = () => {
	return (
		<div>
			<Routes>
				<Route path="/home" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/articles/:article_id" element={<ArticlePage />} />
			</Routes>
		</div>
	);
};

export default Container;
