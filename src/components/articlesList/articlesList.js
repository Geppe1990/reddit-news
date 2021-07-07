import React, { useState, useEffect } from "react";
import "./articlesList.scss";
import { get } from "../../helpers";
import { FaExternalLinkAlt } from "react-icons/fa";

const ArticlesList = () => {
	// const [errorMessage, setErrorMessage] = useState("");
	const [articles, setArticles] = useState([]);
	// const [title, setTitle] = useState("");

	console.log(articles);
	useEffect(() => {
		get(
			"https://www.reddit.com/r/reactjs/top.json?limit=15&t=day",
			(response) => {
				setArticles(response.data.children);
			} // setErrorMessage
		);
	}, []);

	return (
		<div className="ArticlesList section">
			<div className="container">
				<h2 className="title">Wallpapers</h2>
				{articles.length > 0 ? (
					<ul>
						{articles.map((key) => (
							<li key={key.data.id} className="mb-6">
								<div className="card">
									<div className="card-content">
										<div className="is-flex is-justify-content-space-between is-align-content-center">
											<h3 className="is-inline m-0">
												{key.data.title}
											</h3>
											<a
												href={`https://reddit.com${key.data.permalink}`}
												target="_blank"
												rel="noreferrer"
											>
												<FaExternalLinkAlt />
											</a>
										</div>
										<p>{key.data.selftext}</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				) : null}
			</div>
		</div>
	);
};

export default ArticlesList;
