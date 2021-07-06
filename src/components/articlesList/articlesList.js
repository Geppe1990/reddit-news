import React, { useState, useEffect } from "react";
import "./articlesList.scss";
import { get } from "../../helpers";

const ArticlesList = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const [articles, setArticles] = useState([]);
	const [title, setTitle] = useState("");

	useEffect(() => {
		get(
			"https://www.reddit.com/r/wallpapers/top.json?limit=30&t=day",
			(response) => {
				setArticles(response.data.data.children);
			},
			setErrorMessage
		);
	}, []);

	return (
		<div className="ArticlesList">
			<h2>Wallpapers</h2>
			{articles.length > 0 ? (
				<ul>
					{articles.map((key, index) => (
						<li key={index}> {key.data.title}</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default ArticlesList;
