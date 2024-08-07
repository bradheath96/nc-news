import axios from "axios";

const newsAPI = axios.create({
	baseURL: "https://nc-bc-news.onrender.com/api",
});

export const getArticles = () => {
	return newsAPI.get("/articles").then((response) => {
		return response.data;
	});
};

export const getArticle = (article_id) => {
	return newsAPI.get(`/articles/${article_id}`).then((res) => {
		return res.data;
	});
};

export const getTopics = () => {
    return newsAPI.get("/topics").then((response) => {
		return response.data;
	});
};
