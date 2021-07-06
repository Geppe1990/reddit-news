import React from "react";
import "./home.scss";
import ArticlesList from "../articlesList/articlesList";

const Home = () => {
	return (
		<div className="home">
			<ArticlesList />
		</div>
	);
};

export default Home;
