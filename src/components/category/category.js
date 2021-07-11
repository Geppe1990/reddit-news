import React from "react";
import Subreddit from "../subreddit/subreddit";

const Category = ({ title, subreddits }) => {
	return (
		<div>
			<h2 className="title">{title}</h2>
			{subreddits.length > 0 ? (
				subreddits.map((subreddit, index) => (
					<Subreddit key={index} title={subreddit} path={subreddit} />
				))
			) : (
				<div>No subreddits for this category!</div>
			)}
		</div>
	);
};

export default Category;
