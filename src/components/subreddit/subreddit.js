import React, { useState, useEffect } from "react";
import { get } from "../../helpers";
import { FaExternalLinkAlt } from "react-icons/fa";

const Subreddit = ({ title, path }) => {
	const [posts, setPosts] = useState([]);
	console.log(posts);
	useEffect(() => {
		get(
			`https://www.reddit.com/r/${path}/top.json?limit=15&t=day`,
			(response) => {
				setPosts(response.data.children);
			}
		);
	}, []);

	return (
		<div>
			<h3 className="title is-uppercase">{title}</h3>
			<ul className="columns is-flex-wrap-wrap mb-6">
				{posts.length > 0 ? (
					posts.map((key, index) => (
						<li key={index} className="column is-half">
							<div className="card">
								<div className="card-content is-clipped">
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
									<p>{key.data.selftext.slice(0, 100)}</p>
								</div>
							</div>
						</li>
					))
				) : (
					<div>No results</div>
				)}
			</ul>
		</div>
	);
};

export default Subreddit;
