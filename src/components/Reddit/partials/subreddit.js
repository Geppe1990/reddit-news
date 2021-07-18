import React, { useState, useEffect } from "react";
import { get } from "../../../helpers";
import { CardColumns } from "react-bootstrap";
import CardWrapper from "../../UI/cardWrapper";

const Subreddit = ({ title, path }) => {
	const [posts, setPosts] = useState([]);
	const timeSort = "week";
	const limit = 5;

	useEffect(() => {
		get(
			`https://www.reddit.com/r/${path}/top.json?limit=${limit}&t=${timeSort}`,
			(response) => {
				setPosts(response.data.children);
			}
		);
	}, []);

	return (
		<div>
			<h3 className="text-uppercase mb-4">{title}</h3>
			<CardColumns>
				{posts.length > 0 ? (
					posts.map((key, index) => (
						<CardWrapper
							key={index}
							color="text-white"
							bgColor="bg-primary"
							link={`https://reddit.com${key.data.permalink}`}
							// content={key.data.selftext.slice(0, 100)}
							title={key.data.title}
						/>
					))
				) : (
					<div>No results</div>
				)}
			</CardColumns>
		</div>
	);
};

export default Subreddit;
