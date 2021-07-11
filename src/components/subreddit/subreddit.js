import React, { useState, useEffect } from "react";
import { get } from "../../helpers";
import { Card, CardColumns } from "react-bootstrap";

const Subreddit = ({ title, path }) => {
	const [posts, setPosts] = useState([]);

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
			<h3 className="text-uppercase mb-4">{title}</h3>
			<CardColumns>
				{posts.length > 0 ? (
					posts.map((key, index) => (
						<Card key={index} className="bg-primary">
							<Card.Body>
								<Card.Title className="h6 m-0">
									<a
										href={`https://reddit.com${key.data.permalink}`}
										target="_blank"
										rel="noreferrer"
										className="text-white"
									>
										<span
											dangerouslySetInnerHTML={{
												__html: key.data.title
											}}
										/>
									</a>
								</Card.Title>
								{/* <Card.Text>
									{key.data.selftext.slice(0, 100)}
								</Card.Text> */}
							</Card.Body>
						</Card>
					))
				) : (
					<div>No results</div>
				)}
			</CardColumns>
		</div>
	);
};

export default Subreddit;
