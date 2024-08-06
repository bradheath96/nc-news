import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getArticles } from "../utils/api"
import Home from "./home";

const Container = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((articles) => {
            setArticles(articles)
        })
    }, [])

    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home articles={articles} setArticles={setArticles} />} />
            </Routes>
        </div>
    )
};

export default Container;
