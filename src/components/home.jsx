import ArticleCards from "./Articles_cards"

const Home = ({ articles, setArticles }) => {
    return (
        <div>
            <h1>Latest News:</h1>
            <ArticleCards articles={articles}/>
        </div>
    )
}

export default Home