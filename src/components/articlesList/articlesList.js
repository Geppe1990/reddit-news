import React from "react";
import "./articlesList.scss";
import { endpoints } from "../../endpoints";
import Category from "../category/category";

const ArticlesList = () => {
	return (
		<div className="columns">
			<div className="column is-three-quarters">
				<div className="section">
					<div className="container">
						{endpoints.map((endpoint, index) => (
							<Category
								key={index}
								title={endpoint.title}
								subreddits={endpoint.paths}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArticlesList;
