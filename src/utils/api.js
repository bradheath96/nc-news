import axios from "axios";

const newsAPI = axios.create({
	baseURL: "https://nc-bc-news.onrender.com/api",
});

export const getArticles = (params) => {
	console.log(params)
	return newsAPI.get("/articles", {params}).then((response) => {
		return response.data;
	})
};

export const getArticle = (article_id) => {
	return newsAPI.get(`/articles/${article_id}`).then((res) => {
		return res.data;
	});
};

export const getArticleComments = (article_id) => {
	return newsAPI.get(`/articles/${article_id}/comments`).then((res) => {
		return res.data;
	});
};

export const getTopics = () => {
	return newsAPI.get("/topics").then((res) => {
		return res.data;
	});
};

export const getUsers = () => {
	return newsAPI.get("/users").then((res) => {
		return res.data;
	});
};

export const patchArticleById = (article_id, patchBody) => {
	return newsAPI.patch(`/articles/${article_id}`, patchBody).then((res) => {
		return res.data;
	});
};

export const postComment = (article_id, postBody) => {
	return newsAPI
		.post(`/articles/${article_id}/comments`, postBody)
		.then((res) => {
			console.log(res, "<<< from API");
			return res.data
		})
		.catch((err) => {
			console.log(err, "<<< error ")
		});
};

export const deleteComment = (comment_id) => {
	return newsAPI.delete(`/comments/${comment_id}`)
		.then((res) => {
			console.log(res)
			console.log(`Delete comment ${comment_id}`)
		});
}
